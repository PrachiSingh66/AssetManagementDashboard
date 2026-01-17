package com.asset.asset_management.repository;

import com.asset.asset_management.entity.Asset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface AssetRepository extends PagingAndSortingRepository<Asset, Long>, JpaRepository<Asset, Long> {
}
