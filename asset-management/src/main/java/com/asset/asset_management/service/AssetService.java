package com.asset.asset_management.service;

import com.asset.asset_management.entity.Asset;
import org.springframework.data.domain.Page;

import java.util.List;

public interface AssetService {
    Asset saveAsset(Asset asset);
    List<Asset> getAllAssets();
    Asset getAssetById(Long id);
    Asset updateAsset(Long id, Asset asset);
    void deleteAsset(Long id);
    Page<Asset> getAssetsPaged(int page, int size);
}

