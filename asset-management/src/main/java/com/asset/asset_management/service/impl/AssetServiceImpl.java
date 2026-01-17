package com.asset.asset_management.service.impl;

import com.asset.asset_management.entity.Asset;
import com.asset.asset_management.exception.ResourceNotFoundException;
import com.asset.asset_management.repository.AssetRepository;
import com.asset.asset_management.service.AssetService;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssetServiceImpl implements AssetService {

    private final AssetRepository repository;

    public AssetServiceImpl(AssetRepository repository) {
        this.repository = repository;
    }

    @Override
    public Asset saveAsset(Asset asset) {
        return repository.save(asset);
    }

    @Override
    public List<Asset> getAllAssets() {
        List<Asset> assets = repository.findAll();

        // Stream example
        return assets.stream()
                .sorted((a,b)->a.getAssetName().compareToIgnoreCase(b.getAssetName()))
                .toList();
    }

    @Override
    public Asset getAssetById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Asset Not Found"));
    }

    @Override
    public Asset updateAsset(Long id, Asset asset) {
        Asset existing = getAssetById(id);

        existing.setAssetName(asset.getAssetName());
        existing.setCategory(asset.getCategory());
        existing.setStatus(asset.getStatus());
        existing.setAssignedTo(asset.getAssignedTo());

        return repository.save(existing);
    }

    @Override
    public void deleteAsset(Long id) {
        repository.delete(getAssetById(id));
    }

    @Override
    public Page<Asset> getAssetsPaged(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").ascending());
        return repository.findAll(pageable);
    }
}
