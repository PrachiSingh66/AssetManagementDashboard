package com.asset.asset_management.controller;

import com.asset.asset_management.entity.Asset;
import com.asset.asset_management.service.AssetService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/assets")
public class AssetController {

    private final AssetService service;

    public AssetController(AssetService service) {
        this.service = service;
    }

    @PostMapping
    public Asset save(@RequestBody Asset asset){
        return service.saveAsset(asset);
    }

    @GetMapping("/{id}")
    public Asset getById(@PathVariable Long id){
        return service.getAssetById(id);
    }

    @PutMapping("/{id}")
    public Asset update(@PathVariable Long id, @RequestBody Asset asset){
        return service.updateAsset(id, asset);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.deleteAsset(id);
    }

    @GetMapping
    public Page<Asset> getAssets(
            @RequestParam(defaultValue="0") int page,
            @RequestParam(defaultValue="5") int size
    ){
        return service.getAssetsPaged(page,size);
    }
}
