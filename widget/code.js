"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var GraphicsSelect;
(function (GraphicsSelect) {
    GraphicsSelect[GraphicsSelect["PC"] = 0] = "PC";
    GraphicsSelect[GraphicsSelect["VR"] = 1] = "VR";
})(GraphicsSelect || (GraphicsSelect = {}));
var GraphicsAntiAliasingPC;
(function (GraphicsAntiAliasingPC) {
    GraphicsAntiAliasingPC[GraphicsAntiAliasingPC["OFF"] = 0] = "OFF";
    GraphicsAntiAliasingPC[GraphicsAntiAliasingPC["FXAA"] = 1] = "FXAA";
    GraphicsAntiAliasingPC[GraphicsAntiAliasingPC["DLAA"] = 2] = "DLAA";
    GraphicsAntiAliasingPC[GraphicsAntiAliasingPC["TAA"] = 3] = "TAA";
    GraphicsAntiAliasingPC[GraphicsAntiAliasingPC["NVIDIA_DLSS_SUPER_RESOLUTION"] = 4] = "NVIDIA_DLSS_SUPER_RESOLUTION";
    GraphicsAntiAliasingPC[GraphicsAntiAliasingPC["AMD_FSR_2"] = 5] = "AMD_FSR_2";
})(GraphicsAntiAliasingPC || (GraphicsAntiAliasingPC = {}));
var GraphicsNvidiaDLSSSuperResolutionPC;
(function (GraphicsNvidiaDLSSSuperResolutionPC) {
    GraphicsNvidiaDLSSSuperResolutionPC[GraphicsNvidiaDLSSSuperResolutionPC["AUTO"] = 0] = "AUTO";
    GraphicsNvidiaDLSSSuperResolutionPC[GraphicsNvidiaDLSSSuperResolutionPC["QUALITY"] = 1] = "QUALITY";
    GraphicsNvidiaDLSSSuperResolutionPC[GraphicsNvidiaDLSSSuperResolutionPC["BALANCED"] = 2] = "BALANCED";
    GraphicsNvidiaDLSSSuperResolutionPC[GraphicsNvidiaDLSSSuperResolutionPC["PERFORMANCE"] = 3] = "PERFORMANCE";
    GraphicsNvidiaDLSSSuperResolutionPC[GraphicsNvidiaDLSSSuperResolutionPC["ULTRA_PERFORMANCE"] = 4] = "ULTRA_PERFORMANCE";
    GraphicsNvidiaDLSSSuperResolutionPC[GraphicsNvidiaDLSSSuperResolutionPC["DLAA"] = 5] = "DLAA";
})(GraphicsNvidiaDLSSSuperResolutionPC || (GraphicsNvidiaDLSSSuperResolutionPC = {}));
var GraphicsAMDFSR2PC;
(function (GraphicsAMDFSR2PC) {
    GraphicsAMDFSR2PC[GraphicsAMDFSR2PC["ULTRA_PERFORMANCE"] = 0] = "ULTRA_PERFORMANCE";
    GraphicsAMDFSR2PC[GraphicsAMDFSR2PC["PERFORMANCE"] = 1] = "PERFORMANCE";
    GraphicsAMDFSR2PC[GraphicsAMDFSR2PC["BALANCED"] = 2] = "BALANCED";
    GraphicsAMDFSR2PC[GraphicsAMDFSR2PC["QUALITY"] = 3] = "QUALITY";
})(GraphicsAMDFSR2PC || (GraphicsAMDFSR2PC = {}));
var GraphicsNvidiaDLSSFrameGenerationPC;
(function (GraphicsNvidiaDLSSFrameGenerationPC) {
    GraphicsNvidiaDLSSFrameGenerationPC[GraphicsNvidiaDLSSFrameGenerationPC["OFF"] = 0] = "OFF";
    GraphicsNvidiaDLSSFrameGenerationPC[GraphicsNvidiaDLSSFrameGenerationPC["ON"] = 1] = "ON";
})(GraphicsNvidiaDLSSFrameGenerationPC || (GraphicsNvidiaDLSSFrameGenerationPC = {}));
var GraphicsVSyncPC;
(function (GraphicsVSyncPC) {
    GraphicsVSyncPC[GraphicsVSyncPC["OFF"] = 0] = "OFF";
    GraphicsVSyncPC[GraphicsVSyncPC["ON"] = 1] = "ON";
})(GraphicsVSyncPC || (GraphicsVSyncPC = {}));
var GraphicsNvidiaReflexLowLatencyPC;
(function (GraphicsNvidiaReflexLowLatencyPC) {
    GraphicsNvidiaReflexLowLatencyPC[GraphicsNvidiaReflexLowLatencyPC["OFF"] = 0] = "OFF";
    GraphicsNvidiaReflexLowLatencyPC[GraphicsNvidiaReflexLowLatencyPC["ON"] = 1] = "ON";
    GraphicsNvidiaReflexLowLatencyPC[GraphicsNvidiaReflexLowLatencyPC["ON_BOOST"] = 2] = "ON_BOOST";
})(GraphicsNvidiaReflexLowLatencyPC || (GraphicsNvidiaReflexLowLatencyPC = {}));
var GraphicsFrameRateLimitPC;
(function (GraphicsFrameRateLimitPC) {
    GraphicsFrameRateLimitPC[GraphicsFrameRateLimitPC["P33_MONITOR_REFRESH_RATE"] = 0] = "P33_MONITOR_REFRESH_RATE";
    GraphicsFrameRateLimitPC[GraphicsFrameRateLimitPC["P50_MONITOR_REFRESH_RATE"] = 1] = "P50_MONITOR_REFRESH_RATE";
    GraphicsFrameRateLimitPC[GraphicsFrameRateLimitPC["P100_MONITOR_REFRESH_RATE"] = 2] = "P100_MONITOR_REFRESH_RATE";
})(GraphicsFrameRateLimitPC || (GraphicsFrameRateLimitPC = {}));
var GraphicsHDR10PC;
(function (GraphicsHDR10PC) {
    GraphicsHDR10PC[GraphicsHDR10PC["OFF"] = 0] = "OFF";
    GraphicsHDR10PC[GraphicsHDR10PC["ON"] = 1] = "ON";
})(GraphicsHDR10PC || (GraphicsHDR10PC = {}));
var GraphicsDirectXVersionPC;
(function (GraphicsDirectXVersionPC) {
    GraphicsDirectXVersionPC[GraphicsDirectXVersionPC["DX11"] = 0] = "DX11";
    GraphicsDirectXVersionPC[GraphicsDirectXVersionPC["DX12_BETA"] = 1] = "DX12_BETA";
})(GraphicsDirectXVersionPC || (GraphicsDirectXVersionPC = {}));
var GraphicsGlobalRenderingQualityPC;
(function (GraphicsGlobalRenderingQualityPC) {
    GraphicsGlobalRenderingQualityPC[GraphicsGlobalRenderingQualityPC["LOW_END"] = 0] = "LOW_END";
    GraphicsGlobalRenderingQualityPC[GraphicsGlobalRenderingQualityPC["MEDIUM"] = 1] = "MEDIUM";
    GraphicsGlobalRenderingQualityPC[GraphicsGlobalRenderingQualityPC["HIGH_END"] = 2] = "HIGH_END";
    GraphicsGlobalRenderingQualityPC[GraphicsGlobalRenderingQualityPC["ULTRA"] = 3] = "ULTRA";
    GraphicsGlobalRenderingQualityPC[GraphicsGlobalRenderingQualityPC["CUSTOM"] = 4] = "CUSTOM";
})(GraphicsGlobalRenderingQualityPC || (GraphicsGlobalRenderingQualityPC = {}));
var GraphicsOffScreenTerrainPreCachingPC;
(function (GraphicsOffScreenTerrainPreCachingPC) {
    GraphicsOffScreenTerrainPreCachingPC[GraphicsOffScreenTerrainPreCachingPC["LOW"] = 0] = "LOW";
    GraphicsOffScreenTerrainPreCachingPC[GraphicsOffScreenTerrainPreCachingPC["MEDIUM"] = 1] = "MEDIUM";
    GraphicsOffScreenTerrainPreCachingPC[GraphicsOffScreenTerrainPreCachingPC["HIGH"] = 2] = "HIGH";
    GraphicsOffScreenTerrainPreCachingPC[GraphicsOffScreenTerrainPreCachingPC["ULTRA"] = 3] = "ULTRA";
})(GraphicsOffScreenTerrainPreCachingPC || (GraphicsOffScreenTerrainPreCachingPC = {}));
var GraphicsTerrainVectorDataPC;
(function (GraphicsTerrainVectorDataPC) {
    GraphicsTerrainVectorDataPC[GraphicsTerrainVectorDataPC["OFF"] = 0] = "OFF";
    GraphicsTerrainVectorDataPC[GraphicsTerrainVectorDataPC["LOW"] = 1] = "LOW";
    GraphicsTerrainVectorDataPC[GraphicsTerrainVectorDataPC["MEDIUM"] = 2] = "MEDIUM";
    GraphicsTerrainVectorDataPC[GraphicsTerrainVectorDataPC["HIGH"] = 3] = "HIGH";
    GraphicsTerrainVectorDataPC[GraphicsTerrainVectorDataPC["ULTRA"] = 4] = "ULTRA";
})(GraphicsTerrainVectorDataPC || (GraphicsTerrainVectorDataPC = {}));
var GraphicsBuildingsPC;
(function (GraphicsBuildingsPC) {
    GraphicsBuildingsPC[GraphicsBuildingsPC["LOW"] = 0] = "LOW";
    GraphicsBuildingsPC[GraphicsBuildingsPC["MEDIUM"] = 1] = "MEDIUM";
    GraphicsBuildingsPC[GraphicsBuildingsPC["HIGH"] = 2] = "HIGH";
    GraphicsBuildingsPC[GraphicsBuildingsPC["ULTRA"] = 3] = "ULTRA";
})(GraphicsBuildingsPC || (GraphicsBuildingsPC = {}));
var GraphicsTreesPC;
(function (GraphicsTreesPC) {
    GraphicsTreesPC[GraphicsTreesPC["LOW"] = 0] = "LOW";
    GraphicsTreesPC[GraphicsTreesPC["MEDIUM"] = 1] = "MEDIUM";
    GraphicsTreesPC[GraphicsTreesPC["HIGH"] = 2] = "HIGH";
    GraphicsTreesPC[GraphicsTreesPC["ULTRA"] = 3] = "ULTRA";
})(GraphicsTreesPC || (GraphicsTreesPC = {}));
var GraphicsGrassAndBushesPC;
(function (GraphicsGrassAndBushesPC) {
    GraphicsGrassAndBushesPC[GraphicsGrassAndBushesPC["OFF"] = 0] = "OFF";
    GraphicsGrassAndBushesPC[GraphicsGrassAndBushesPC["LOW"] = 1] = "LOW";
    GraphicsGrassAndBushesPC[GraphicsGrassAndBushesPC["MEDIUM"] = 2] = "MEDIUM";
    GraphicsGrassAndBushesPC[GraphicsGrassAndBushesPC["HIGH"] = 3] = "HIGH";
    GraphicsGrassAndBushesPC[GraphicsGrassAndBushesPC["ULTRA"] = 4] = "ULTRA";
})(GraphicsGrassAndBushesPC || (GraphicsGrassAndBushesPC = {}));
var GraphicsVolumetricCloudsPC;
(function (GraphicsVolumetricCloudsPC) {
    GraphicsVolumetricCloudsPC[GraphicsVolumetricCloudsPC["LOW"] = 0] = "LOW";
    GraphicsVolumetricCloudsPC[GraphicsVolumetricCloudsPC["MEDIUM"] = 1] = "MEDIUM";
    GraphicsVolumetricCloudsPC[GraphicsVolumetricCloudsPC["HIGH"] = 2] = "HIGH";
    GraphicsVolumetricCloudsPC[GraphicsVolumetricCloudsPC["ULTRA"] = 3] = "ULTRA";
})(GraphicsVolumetricCloudsPC || (GraphicsVolumetricCloudsPC = {}));
var GraphicsTextureResolutionPC;
(function (GraphicsTextureResolutionPC) {
    GraphicsTextureResolutionPC[GraphicsTextureResolutionPC["LOW"] = 0] = "LOW";
    GraphicsTextureResolutionPC[GraphicsTextureResolutionPC["MEDIUM"] = 1] = "MEDIUM";
    GraphicsTextureResolutionPC[GraphicsTextureResolutionPC["HIGH"] = 2] = "HIGH";
    GraphicsTextureResolutionPC[GraphicsTextureResolutionPC["ULTRA"] = 3] = "ULTRA";
})(GraphicsTextureResolutionPC || (GraphicsTextureResolutionPC = {}));
var GraphicsAnisotropicFilteringPC;
(function (GraphicsAnisotropicFilteringPC) {
    GraphicsAnisotropicFilteringPC[GraphicsAnisotropicFilteringPC["OFF"] = 0] = "OFF";
    GraphicsAnisotropicFilteringPC[GraphicsAnisotropicFilteringPC["_2X"] = 1] = "_2X";
    GraphicsAnisotropicFilteringPC[GraphicsAnisotropicFilteringPC["_4X"] = 2] = "_4X";
    GraphicsAnisotropicFilteringPC[GraphicsAnisotropicFilteringPC["_8X"] = 3] = "_8X";
    GraphicsAnisotropicFilteringPC[GraphicsAnisotropicFilteringPC["_16X"] = 4] = "_16X";
})(GraphicsAnisotropicFilteringPC || (GraphicsAnisotropicFilteringPC = {}));
var GraphicsTextureSupersamplingPC;
(function (GraphicsTextureSupersamplingPC) {
    GraphicsTextureSupersamplingPC[GraphicsTextureSupersamplingPC["OFF"] = 0] = "OFF";
    GraphicsTextureSupersamplingPC[GraphicsTextureSupersamplingPC["_2X2"] = 1] = "_2X2";
    GraphicsTextureSupersamplingPC[GraphicsTextureSupersamplingPC["_4X4"] = 2] = "_4X4";
    GraphicsTextureSupersamplingPC[GraphicsTextureSupersamplingPC["_6X6"] = 3] = "_6X6";
    GraphicsTextureSupersamplingPC[GraphicsTextureSupersamplingPC["_8X8"] = 4] = "_8X8";
})(GraphicsTextureSupersamplingPC || (GraphicsTextureSupersamplingPC = {}));
var GraphicsTextureSynthesisPC;
(function (GraphicsTextureSynthesisPC) {
    GraphicsTextureSynthesisPC[GraphicsTextureSynthesisPC["LOW"] = 0] = "LOW";
    GraphicsTextureSynthesisPC[GraphicsTextureSynthesisPC["MEDIUM"] = 1] = "MEDIUM";
    GraphicsTextureSynthesisPC[GraphicsTextureSynthesisPC["HIGH"] = 2] = "HIGH";
    GraphicsTextureSynthesisPC[GraphicsTextureSynthesisPC["ULTRA"] = 3] = "ULTRA";
})(GraphicsTextureSynthesisPC || (GraphicsTextureSynthesisPC = {}));
var GraphicsWaterWavesPC;
(function (GraphicsWaterWavesPC) {
    GraphicsWaterWavesPC[GraphicsWaterWavesPC["LOW"] = 0] = "LOW";
    GraphicsWaterWavesPC[GraphicsWaterWavesPC["MEDIUM"] = 1] = "MEDIUM";
    GraphicsWaterWavesPC[GraphicsWaterWavesPC["HIGH"] = 2] = "HIGH";
})(GraphicsWaterWavesPC || (GraphicsWaterWavesPC = {}));
var GraphicsShadowMapsPC;
(function (GraphicsShadowMapsPC) {
    GraphicsShadowMapsPC[GraphicsShadowMapsPC["_768"] = 0] = "_768";
    GraphicsShadowMapsPC[GraphicsShadowMapsPC["_1024"] = 1] = "_1024";
    GraphicsShadowMapsPC[GraphicsShadowMapsPC["_1536"] = 2] = "_1536";
    GraphicsShadowMapsPC[GraphicsShadowMapsPC["_2048"] = 3] = "_2048";
})(GraphicsShadowMapsPC || (GraphicsShadowMapsPC = {}));
var GraphicsTerrainShadowsPC;
(function (GraphicsTerrainShadowsPC) {
    GraphicsTerrainShadowsPC[GraphicsTerrainShadowsPC["OFF"] = 0] = "OFF";
    GraphicsTerrainShadowsPC[GraphicsTerrainShadowsPC["_128"] = 1] = "_128";
    GraphicsTerrainShadowsPC[GraphicsTerrainShadowsPC["_256"] = 2] = "_256";
    GraphicsTerrainShadowsPC[GraphicsTerrainShadowsPC["_512"] = 3] = "_512";
    GraphicsTerrainShadowsPC[GraphicsTerrainShadowsPC["_1024"] = 4] = "_1024";
    GraphicsTerrainShadowsPC[GraphicsTerrainShadowsPC["_2048"] = 5] = "_2048";
})(GraphicsTerrainShadowsPC || (GraphicsTerrainShadowsPC = {}));
var GraphicsContactShadowsPC;
(function (GraphicsContactShadowsPC) {
    GraphicsContactShadowsPC[GraphicsContactShadowsPC["OFF"] = 0] = "OFF";
    GraphicsContactShadowsPC[GraphicsContactShadowsPC["LOW"] = 1] = "LOW";
    GraphicsContactShadowsPC[GraphicsContactShadowsPC["MEDIUM"] = 2] = "MEDIUM";
    GraphicsContactShadowsPC[GraphicsContactShadowsPC["HIGH"] = 3] = "HIGH";
    GraphicsContactShadowsPC[GraphicsContactShadowsPC["ULTRA"] = 4] = "ULTRA";
})(GraphicsContactShadowsPC || (GraphicsContactShadowsPC = {}));
var GraphicsWindshieldEffectsPC;
(function (GraphicsWindshieldEffectsPC) {
    GraphicsWindshieldEffectsPC[GraphicsWindshieldEffectsPC["LOW"] = 0] = "LOW";
    GraphicsWindshieldEffectsPC[GraphicsWindshieldEffectsPC["MEDIUM"] = 1] = "MEDIUM";
    GraphicsWindshieldEffectsPC[GraphicsWindshieldEffectsPC["HIGH"] = 2] = "HIGH";
    GraphicsWindshieldEffectsPC[GraphicsWindshieldEffectsPC["ULTRA"] = 3] = "ULTRA";
})(GraphicsWindshieldEffectsPC || (GraphicsWindshieldEffectsPC = {}));
var GraphicsAmbientOcclusionPC;
(function (GraphicsAmbientOcclusionPC) {
    GraphicsAmbientOcclusionPC[GraphicsAmbientOcclusionPC["OFF"] = 0] = "OFF";
    GraphicsAmbientOcclusionPC[GraphicsAmbientOcclusionPC["LOW"] = 1] = "LOW";
    GraphicsAmbientOcclusionPC[GraphicsAmbientOcclusionPC["MEDIUM"] = 2] = "MEDIUM";
    GraphicsAmbientOcclusionPC[GraphicsAmbientOcclusionPC["HIGH"] = 3] = "HIGH";
    GraphicsAmbientOcclusionPC[GraphicsAmbientOcclusionPC["ULTRA"] = 4] = "ULTRA";
})(GraphicsAmbientOcclusionPC || (GraphicsAmbientOcclusionPC = {}));
var GraphicsCubemapReflectionsPC;
(function (GraphicsCubemapReflectionsPC) {
    GraphicsCubemapReflectionsPC[GraphicsCubemapReflectionsPC["_96"] = 0] = "_96";
    GraphicsCubemapReflectionsPC[GraphicsCubemapReflectionsPC["_128"] = 1] = "_128";
    GraphicsCubemapReflectionsPC[GraphicsCubemapReflectionsPC["_192"] = 2] = "_192";
    GraphicsCubemapReflectionsPC[GraphicsCubemapReflectionsPC["_256"] = 3] = "_256";
})(GraphicsCubemapReflectionsPC || (GraphicsCubemapReflectionsPC = {}));
var GraphicsRaymarchedReflectionsPC;
(function (GraphicsRaymarchedReflectionsPC) {
    GraphicsRaymarchedReflectionsPC[GraphicsRaymarchedReflectionsPC["OFF"] = 0] = "OFF";
    GraphicsRaymarchedReflectionsPC[GraphicsRaymarchedReflectionsPC["LOW"] = 1] = "LOW";
    GraphicsRaymarchedReflectionsPC[GraphicsRaymarchedReflectionsPC["MEDIUM"] = 2] = "MEDIUM";
    GraphicsRaymarchedReflectionsPC[GraphicsRaymarchedReflectionsPC["HIGH"] = 3] = "HIGH";
    GraphicsRaymarchedReflectionsPC[GraphicsRaymarchedReflectionsPC["ULTRA"] = 4] = "ULTRA";
})(GraphicsRaymarchedReflectionsPC || (GraphicsRaymarchedReflectionsPC = {}));
var GraphicsLightShaftsPC;
(function (GraphicsLightShaftsPC) {
    GraphicsLightShaftsPC[GraphicsLightShaftsPC["OFF"] = 0] = "OFF";
    GraphicsLightShaftsPC[GraphicsLightShaftsPC["LOW"] = 1] = "LOW";
    GraphicsLightShaftsPC[GraphicsLightShaftsPC["MEDIUM"] = 2] = "MEDIUM";
    GraphicsLightShaftsPC[GraphicsLightShaftsPC["HIGH"] = 3] = "HIGH";
    GraphicsLightShaftsPC[GraphicsLightShaftsPC["ULTRA"] = 4] = "ULTRA";
})(GraphicsLightShaftsPC || (GraphicsLightShaftsPC = {}));
var GraphicsBloomPC;
(function (GraphicsBloomPC) {
    GraphicsBloomPC[GraphicsBloomPC["OFF"] = 0] = "OFF";
    GraphicsBloomPC[GraphicsBloomPC["ON"] = 1] = "ON";
})(GraphicsBloomPC || (GraphicsBloomPC = {}));
var GraphicsDepthOfFieldPC;
(function (GraphicsDepthOfFieldPC) {
    GraphicsDepthOfFieldPC[GraphicsDepthOfFieldPC["OFF"] = 0] = "OFF";
    GraphicsDepthOfFieldPC[GraphicsDepthOfFieldPC["LOW"] = 1] = "LOW";
    GraphicsDepthOfFieldPC[GraphicsDepthOfFieldPC["MEDIUM"] = 2] = "MEDIUM";
    GraphicsDepthOfFieldPC[GraphicsDepthOfFieldPC["HIGH"] = 3] = "HIGH";
    GraphicsDepthOfFieldPC[GraphicsDepthOfFieldPC["ULTRA"] = 4] = "ULTRA";
})(GraphicsDepthOfFieldPC || (GraphicsDepthOfFieldPC = {}));
var GraphicsMotionBlurPC;
(function (GraphicsMotionBlurPC) {
    GraphicsMotionBlurPC[GraphicsMotionBlurPC["OFF"] = 0] = "OFF";
    GraphicsMotionBlurPC[GraphicsMotionBlurPC["LOW"] = 1] = "LOW";
    GraphicsMotionBlurPC[GraphicsMotionBlurPC["MEDIUM"] = 2] = "MEDIUM";
    GraphicsMotionBlurPC[GraphicsMotionBlurPC["HIGH"] = 3] = "HIGH";
    GraphicsMotionBlurPC[GraphicsMotionBlurPC["ULTRA"] = 4] = "ULTRA";
})(GraphicsMotionBlurPC || (GraphicsMotionBlurPC = {}));
var GraphicsLensCorrectionPC;
(function (GraphicsLensCorrectionPC) {
    GraphicsLensCorrectionPC[GraphicsLensCorrectionPC["OFF"] = 0] = "OFF";
    GraphicsLensCorrectionPC[GraphicsLensCorrectionPC["ON"] = 1] = "ON";
})(GraphicsLensCorrectionPC || (GraphicsLensCorrectionPC = {}));
var GraphicsLensFlarePC;
(function (GraphicsLensFlarePC) {
    GraphicsLensFlarePC[GraphicsLensFlarePC["OFF"] = 0] = "OFF";
    GraphicsLensFlarePC[GraphicsLensFlarePC["ON"] = 1] = "ON";
})(GraphicsLensFlarePC || (GraphicsLensFlarePC = {}));
var GraphicsGlassCockpitRefreshRatePC;
(function (GraphicsGlassCockpitRefreshRatePC) {
    GraphicsGlassCockpitRefreshRatePC[GraphicsGlassCockpitRefreshRatePC["LOW"] = 0] = "LOW";
    GraphicsGlassCockpitRefreshRatePC[GraphicsGlassCockpitRefreshRatePC["MEDIUM"] = 1] = "MEDIUM";
    GraphicsGlassCockpitRefreshRatePC[GraphicsGlassCockpitRefreshRatePC["HIGH"] = 2] = "HIGH";
})(GraphicsGlassCockpitRefreshRatePC || (GraphicsGlassCockpitRefreshRatePC = {}));
var GraphicsAntiAliasingVR;
(function (GraphicsAntiAliasingVR) {
    GraphicsAntiAliasingVR[GraphicsAntiAliasingVR["OFF"] = 0] = "OFF";
    GraphicsAntiAliasingVR[GraphicsAntiAliasingVR["FXAA"] = 1] = "FXAA";
    GraphicsAntiAliasingVR[GraphicsAntiAliasingVR["DLAA"] = 2] = "DLAA";
    GraphicsAntiAliasingVR[GraphicsAntiAliasingVR["TAA"] = 3] = "TAA";
    GraphicsAntiAliasingVR[GraphicsAntiAliasingVR["NVIDIA_DLSS_SUPER_RESOLUTION"] = 4] = "NVIDIA_DLSS_SUPER_RESOLUTION";
    GraphicsAntiAliasingVR[GraphicsAntiAliasingVR["AMD_FSR_2"] = 5] = "AMD_FSR_2";
})(GraphicsAntiAliasingVR || (GraphicsAntiAliasingVR = {}));
var GraphicsNvidiaDLSSSuperResolutionVR;
(function (GraphicsNvidiaDLSSSuperResolutionVR) {
    GraphicsNvidiaDLSSSuperResolutionVR[GraphicsNvidiaDLSSSuperResolutionVR["AUTO"] = 0] = "AUTO";
    GraphicsNvidiaDLSSSuperResolutionVR[GraphicsNvidiaDLSSSuperResolutionVR["QUALITY"] = 1] = "QUALITY";
    GraphicsNvidiaDLSSSuperResolutionVR[GraphicsNvidiaDLSSSuperResolutionVR["BALANCED"] = 2] = "BALANCED";
    GraphicsNvidiaDLSSSuperResolutionVR[GraphicsNvidiaDLSSSuperResolutionVR["PERFORMANCE"] = 3] = "PERFORMANCE";
    GraphicsNvidiaDLSSSuperResolutionVR[GraphicsNvidiaDLSSSuperResolutionVR["ULTRA_PERFORMANCE"] = 4] = "ULTRA_PERFORMANCE";
    GraphicsNvidiaDLSSSuperResolutionVR[GraphicsNvidiaDLSSSuperResolutionVR["DLAA"] = 5] = "DLAA";
})(GraphicsNvidiaDLSSSuperResolutionVR || (GraphicsNvidiaDLSSSuperResolutionVR = {}));
var GraphicsAMDFSR2VR;
(function (GraphicsAMDFSR2VR) {
    GraphicsAMDFSR2VR[GraphicsAMDFSR2VR["ULTRA_PERFORMANCE"] = 0] = "ULTRA_PERFORMANCE";
    GraphicsAMDFSR2VR[GraphicsAMDFSR2VR["PERFORMANCE"] = 1] = "PERFORMANCE";
    GraphicsAMDFSR2VR[GraphicsAMDFSR2VR["BALANCED"] = 2] = "BALANCED";
    GraphicsAMDFSR2VR[GraphicsAMDFSR2VR["QUALITY"] = 3] = "QUALITY";
})(GraphicsAMDFSR2VR || (GraphicsAMDFSR2VR = {}));
var GraphicsReprojectionModeVR;
(function (GraphicsReprojectionModeVR) {
    GraphicsReprojectionModeVR[GraphicsReprojectionModeVR["OFF"] = 0] = "OFF";
    GraphicsReprojectionModeVR[GraphicsReprojectionModeVR["DEPTH"] = 1] = "DEPTH";
    GraphicsReprojectionModeVR[GraphicsReprojectionModeVR["DEPTH_AND_MOTION"] = 2] = "DEPTH_AND_MOTION";
})(GraphicsReprojectionModeVR || (GraphicsReprojectionModeVR = {}));
var GraphicsNvidiaReflexLowLatencyVR;
(function (GraphicsNvidiaReflexLowLatencyVR) {
    GraphicsNvidiaReflexLowLatencyVR[GraphicsNvidiaReflexLowLatencyVR["OFF"] = 0] = "OFF";
    GraphicsNvidiaReflexLowLatencyVR[GraphicsNvidiaReflexLowLatencyVR["ON"] = 1] = "ON";
    GraphicsNvidiaReflexLowLatencyVR[GraphicsNvidiaReflexLowLatencyVR["ON_BOOST"] = 2] = "ON_BOOST";
})(GraphicsNvidiaReflexLowLatencyVR || (GraphicsNvidiaReflexLowLatencyVR = {}));
var GraphicsGlobalRenderingQualityVR;
(function (GraphicsGlobalRenderingQualityVR) {
    GraphicsGlobalRenderingQualityVR[GraphicsGlobalRenderingQualityVR["DEFAULT"] = 0] = "DEFAULT";
    GraphicsGlobalRenderingQualityVR[GraphicsGlobalRenderingQualityVR["LOW_END"] = 1] = "LOW_END";
    GraphicsGlobalRenderingQualityVR[GraphicsGlobalRenderingQualityVR["MEDIUM"] = 2] = "MEDIUM";
    GraphicsGlobalRenderingQualityVR[GraphicsGlobalRenderingQualityVR["HIGH_END"] = 3] = "HIGH_END";
    GraphicsGlobalRenderingQualityVR[GraphicsGlobalRenderingQualityVR["ULTRA"] = 4] = "ULTRA";
})(GraphicsGlobalRenderingQualityVR || (GraphicsGlobalRenderingQualityVR = {}));
var GraphicsOffScreenTerrainPreCachingVR;
(function (GraphicsOffScreenTerrainPreCachingVR) {
    GraphicsOffScreenTerrainPreCachingVR[GraphicsOffScreenTerrainPreCachingVR["LOW"] = 0] = "LOW";
    GraphicsOffScreenTerrainPreCachingVR[GraphicsOffScreenTerrainPreCachingVR["MEDIUM"] = 1] = "MEDIUM";
    GraphicsOffScreenTerrainPreCachingVR[GraphicsOffScreenTerrainPreCachingVR["HIGH"] = 2] = "HIGH";
    GraphicsOffScreenTerrainPreCachingVR[GraphicsOffScreenTerrainPreCachingVR["ULTRA"] = 3] = "ULTRA";
})(GraphicsOffScreenTerrainPreCachingVR || (GraphicsOffScreenTerrainPreCachingVR = {}));
var GraphicsTerrainVectorDataVR;
(function (GraphicsTerrainVectorDataVR) {
    GraphicsTerrainVectorDataVR[GraphicsTerrainVectorDataVR["OFF"] = 0] = "OFF";
    GraphicsTerrainVectorDataVR[GraphicsTerrainVectorDataVR["LOW"] = 1] = "LOW";
    GraphicsTerrainVectorDataVR[GraphicsTerrainVectorDataVR["MEDIUM"] = 2] = "MEDIUM";
    GraphicsTerrainVectorDataVR[GraphicsTerrainVectorDataVR["HIGH"] = 3] = "HIGH";
    GraphicsTerrainVectorDataVR[GraphicsTerrainVectorDataVR["ULTRA"] = 4] = "ULTRA";
})(GraphicsTerrainVectorDataVR || (GraphicsTerrainVectorDataVR = {}));
var GraphicsBuildingsVR;
(function (GraphicsBuildingsVR) {
    GraphicsBuildingsVR[GraphicsBuildingsVR["LOW"] = 0] = "LOW";
    GraphicsBuildingsVR[GraphicsBuildingsVR["MEDIUM"] = 1] = "MEDIUM";
    GraphicsBuildingsVR[GraphicsBuildingsVR["HIGH"] = 2] = "HIGH";
    GraphicsBuildingsVR[GraphicsBuildingsVR["ULTRA"] = 3] = "ULTRA";
})(GraphicsBuildingsVR || (GraphicsBuildingsVR = {}));
var GraphicsTreesVR;
(function (GraphicsTreesVR) {
    GraphicsTreesVR[GraphicsTreesVR["LOW"] = 0] = "LOW";
    GraphicsTreesVR[GraphicsTreesVR["MEDIUM"] = 1] = "MEDIUM";
    GraphicsTreesVR[GraphicsTreesVR["HIGH"] = 2] = "HIGH";
    GraphicsTreesVR[GraphicsTreesVR["ULTRA"] = 3] = "ULTRA";
})(GraphicsTreesVR || (GraphicsTreesVR = {}));
var GraphicsGrassAndBushesVR;
(function (GraphicsGrassAndBushesVR) {
    GraphicsGrassAndBushesVR[GraphicsGrassAndBushesVR["OFF"] = 0] = "OFF";
    GraphicsGrassAndBushesVR[GraphicsGrassAndBushesVR["LOW"] = 1] = "LOW";
    GraphicsGrassAndBushesVR[GraphicsGrassAndBushesVR["MEDIUM"] = 2] = "MEDIUM";
    GraphicsGrassAndBushesVR[GraphicsGrassAndBushesVR["HIGH"] = 3] = "HIGH";
    GraphicsGrassAndBushesVR[GraphicsGrassAndBushesVR["ULTRA"] = 4] = "ULTRA";
})(GraphicsGrassAndBushesVR || (GraphicsGrassAndBushesVR = {}));
var GraphicsVolumetricCloudsVR;
(function (GraphicsVolumetricCloudsVR) {
    GraphicsVolumetricCloudsVR[GraphicsVolumetricCloudsVR["LOW"] = 0] = "LOW";
    GraphicsVolumetricCloudsVR[GraphicsVolumetricCloudsVR["MEDIUM"] = 1] = "MEDIUM";
    GraphicsVolumetricCloudsVR[GraphicsVolumetricCloudsVR["HIGH"] = 2] = "HIGH";
    GraphicsVolumetricCloudsVR[GraphicsVolumetricCloudsVR["ULTRA"] = 3] = "ULTRA";
})(GraphicsVolumetricCloudsVR || (GraphicsVolumetricCloudsVR = {}));
var GraphicsTextureResolutionVR;
(function (GraphicsTextureResolutionVR) {
    GraphicsTextureResolutionVR[GraphicsTextureResolutionVR["LOW"] = 0] = "LOW";
    GraphicsTextureResolutionVR[GraphicsTextureResolutionVR["MEDIUM"] = 1] = "MEDIUM";
    GraphicsTextureResolutionVR[GraphicsTextureResolutionVR["HIGH"] = 2] = "HIGH";
    GraphicsTextureResolutionVR[GraphicsTextureResolutionVR["ULTRA"] = 3] = "ULTRA";
})(GraphicsTextureResolutionVR || (GraphicsTextureResolutionVR = {}));
var GraphicsAnisotropicFilteringVR;
(function (GraphicsAnisotropicFilteringVR) {
    GraphicsAnisotropicFilteringVR[GraphicsAnisotropicFilteringVR["OFF"] = 0] = "OFF";
    GraphicsAnisotropicFilteringVR[GraphicsAnisotropicFilteringVR["_2X"] = 1] = "_2X";
    GraphicsAnisotropicFilteringVR[GraphicsAnisotropicFilteringVR["_4X"] = 2] = "_4X";
    GraphicsAnisotropicFilteringVR[GraphicsAnisotropicFilteringVR["_8X"] = 3] = "_8X";
    GraphicsAnisotropicFilteringVR[GraphicsAnisotropicFilteringVR["_16X"] = 4] = "_16X";
})(GraphicsAnisotropicFilteringVR || (GraphicsAnisotropicFilteringVR = {}));
var GraphicsTextureSupersamplingVR;
(function (GraphicsTextureSupersamplingVR) {
    GraphicsTextureSupersamplingVR[GraphicsTextureSupersamplingVR["OFF"] = 0] = "OFF";
    GraphicsTextureSupersamplingVR[GraphicsTextureSupersamplingVR["_2X2"] = 1] = "_2X2";
    GraphicsTextureSupersamplingVR[GraphicsTextureSupersamplingVR["_4X4"] = 2] = "_4X4";
    GraphicsTextureSupersamplingVR[GraphicsTextureSupersamplingVR["_6X6"] = 3] = "_6X6";
    GraphicsTextureSupersamplingVR[GraphicsTextureSupersamplingVR["_8X8"] = 4] = "_8X8";
})(GraphicsTextureSupersamplingVR || (GraphicsTextureSupersamplingVR = {}));
var GraphicsTextureSynthesisVR;
(function (GraphicsTextureSynthesisVR) {
    GraphicsTextureSynthesisVR[GraphicsTextureSynthesisVR["LOW"] = 0] = "LOW";
    GraphicsTextureSynthesisVR[GraphicsTextureSynthesisVR["MEDIUM"] = 1] = "MEDIUM";
    GraphicsTextureSynthesisVR[GraphicsTextureSynthesisVR["HIGH"] = 2] = "HIGH";
    GraphicsTextureSynthesisVR[GraphicsTextureSynthesisVR["ULTRA"] = 3] = "ULTRA";
})(GraphicsTextureSynthesisVR || (GraphicsTextureSynthesisVR = {}));
var GraphicsWaterWavesVR;
(function (GraphicsWaterWavesVR) {
    GraphicsWaterWavesVR[GraphicsWaterWavesVR["LOW"] = 0] = "LOW";
    GraphicsWaterWavesVR[GraphicsWaterWavesVR["MEDIUM"] = 1] = "MEDIUM";
    GraphicsWaterWavesVR[GraphicsWaterWavesVR["HIGH"] = 2] = "HIGH";
})(GraphicsWaterWavesVR || (GraphicsWaterWavesVR = {}));
var GraphicsShadowMapsVR;
(function (GraphicsShadowMapsVR) {
    GraphicsShadowMapsVR[GraphicsShadowMapsVR["_768"] = 0] = "_768";
    GraphicsShadowMapsVR[GraphicsShadowMapsVR["_1024"] = 1] = "_1024";
    GraphicsShadowMapsVR[GraphicsShadowMapsVR["_1536"] = 2] = "_1536";
    GraphicsShadowMapsVR[GraphicsShadowMapsVR["_2048"] = 3] = "_2048";
})(GraphicsShadowMapsVR || (GraphicsShadowMapsVR = {}));
var GraphicsTerrainShadowsVR;
(function (GraphicsTerrainShadowsVR) {
    GraphicsTerrainShadowsVR[GraphicsTerrainShadowsVR["OFF"] = 0] = "OFF";
    GraphicsTerrainShadowsVR[GraphicsTerrainShadowsVR["_128"] = 1] = "_128";
    GraphicsTerrainShadowsVR[GraphicsTerrainShadowsVR["_256"] = 2] = "_256";
    GraphicsTerrainShadowsVR[GraphicsTerrainShadowsVR["_512"] = 3] = "_512";
    GraphicsTerrainShadowsVR[GraphicsTerrainShadowsVR["_1024"] = 4] = "_1024";
    GraphicsTerrainShadowsVR[GraphicsTerrainShadowsVR["_2048"] = 5] = "_2048";
})(GraphicsTerrainShadowsVR || (GraphicsTerrainShadowsVR = {}));
var GraphicsContactShadowsVR;
(function (GraphicsContactShadowsVR) {
    GraphicsContactShadowsVR[GraphicsContactShadowsVR["OFF"] = 0] = "OFF";
    GraphicsContactShadowsVR[GraphicsContactShadowsVR["LOW"] = 1] = "LOW";
    GraphicsContactShadowsVR[GraphicsContactShadowsVR["MEDIUM"] = 2] = "MEDIUM";
    GraphicsContactShadowsVR[GraphicsContactShadowsVR["HIGH"] = 3] = "HIGH";
    GraphicsContactShadowsVR[GraphicsContactShadowsVR["ULTRA"] = 4] = "ULTRA";
})(GraphicsContactShadowsVR || (GraphicsContactShadowsVR = {}));
var GraphicsWindshieldEffectsVR;
(function (GraphicsWindshieldEffectsVR) {
    GraphicsWindshieldEffectsVR[GraphicsWindshieldEffectsVR["LOW"] = 0] = "LOW";
    GraphicsWindshieldEffectsVR[GraphicsWindshieldEffectsVR["MEDIUM"] = 1] = "MEDIUM";
    GraphicsWindshieldEffectsVR[GraphicsWindshieldEffectsVR["HIGH"] = 2] = "HIGH";
    GraphicsWindshieldEffectsVR[GraphicsWindshieldEffectsVR["ULTRA"] = 3] = "ULTRA";
})(GraphicsWindshieldEffectsVR || (GraphicsWindshieldEffectsVR = {}));
var GraphicsAmbientOcclusionVR;
(function (GraphicsAmbientOcclusionVR) {
    GraphicsAmbientOcclusionVR[GraphicsAmbientOcclusionVR["OFF"] = 0] = "OFF";
    GraphicsAmbientOcclusionVR[GraphicsAmbientOcclusionVR["LOW"] = 1] = "LOW";
    GraphicsAmbientOcclusionVR[GraphicsAmbientOcclusionVR["MEDIUM"] = 2] = "MEDIUM";
    GraphicsAmbientOcclusionVR[GraphicsAmbientOcclusionVR["HIGH"] = 3] = "HIGH";
    GraphicsAmbientOcclusionVR[GraphicsAmbientOcclusionVR["ULTRA"] = 4] = "ULTRA";
})(GraphicsAmbientOcclusionVR || (GraphicsAmbientOcclusionVR = {}));
var GraphicsCubemapReflectionsVR;
(function (GraphicsCubemapReflectionsVR) {
    GraphicsCubemapReflectionsVR[GraphicsCubemapReflectionsVR["_96"] = 0] = "_96";
    GraphicsCubemapReflectionsVR[GraphicsCubemapReflectionsVR["_128"] = 1] = "_128";
    GraphicsCubemapReflectionsVR[GraphicsCubemapReflectionsVR["_192"] = 2] = "_192";
    GraphicsCubemapReflectionsVR[GraphicsCubemapReflectionsVR["_256"] = 3] = "_256";
})(GraphicsCubemapReflectionsVR || (GraphicsCubemapReflectionsVR = {}));
var GraphicsRaymarchedReflectionsVR;
(function (GraphicsRaymarchedReflectionsVR) {
    GraphicsRaymarchedReflectionsVR[GraphicsRaymarchedReflectionsVR["OFF"] = 0] = "OFF";
    GraphicsRaymarchedReflectionsVR[GraphicsRaymarchedReflectionsVR["LOW"] = 1] = "LOW";
    GraphicsRaymarchedReflectionsVR[GraphicsRaymarchedReflectionsVR["MEDIUM"] = 2] = "MEDIUM";
    GraphicsRaymarchedReflectionsVR[GraphicsRaymarchedReflectionsVR["HIGH"] = 3] = "HIGH";
    GraphicsRaymarchedReflectionsVR[GraphicsRaymarchedReflectionsVR["ULTRA"] = 4] = "ULTRA";
})(GraphicsRaymarchedReflectionsVR || (GraphicsRaymarchedReflectionsVR = {}));
var GraphicsLightShaftsVR;
(function (GraphicsLightShaftsVR) {
    GraphicsLightShaftsVR[GraphicsLightShaftsVR["OFF"] = 0] = "OFF";
    GraphicsLightShaftsVR[GraphicsLightShaftsVR["LOW"] = 1] = "LOW";
    GraphicsLightShaftsVR[GraphicsLightShaftsVR["MEDIUM"] = 2] = "MEDIUM";
    GraphicsLightShaftsVR[GraphicsLightShaftsVR["HIGH"] = 3] = "HIGH";
    GraphicsLightShaftsVR[GraphicsLightShaftsVR["ULTRA"] = 4] = "ULTRA";
})(GraphicsLightShaftsVR || (GraphicsLightShaftsVR = {}));
var GraphicsBloomVR;
(function (GraphicsBloomVR) {
    GraphicsBloomVR[GraphicsBloomVR["OFF"] = 0] = "OFF";
    GraphicsBloomVR[GraphicsBloomVR["ON"] = 1] = "ON";
})(GraphicsBloomVR || (GraphicsBloomVR = {}));
var GraphicsGlassCockpitRefreshRateVR;
(function (GraphicsGlassCockpitRefreshRateVR) {
    GraphicsGlassCockpitRefreshRateVR[GraphicsGlassCockpitRefreshRateVR["LOW"] = 0] = "LOW";
    GraphicsGlassCockpitRefreshRateVR[GraphicsGlassCockpitRefreshRateVR["MEDIUM"] = 1] = "MEDIUM";
    GraphicsGlassCockpitRefreshRateVR[GraphicsGlassCockpitRefreshRateVR["HIGH"] = 2] = "HIGH";
})(GraphicsGlassCockpitRefreshRateVR || (GraphicsGlassCockpitRefreshRateVR = {}));
var CameraCameraSelection;
(function (CameraCameraSelection) {
    CameraCameraSelection[CameraCameraSelection["COCKPIT"] = 0] = "COCKPIT";
    CameraCameraSelection[CameraCameraSelection["CHASE"] = 1] = "CHASE";
})(CameraCameraSelection || (CameraCameraSelection = {}));
var CameraQuickViewFunction;
(function (CameraQuickViewFunction) {
    CameraQuickViewFunction[CameraQuickViewFunction["TOGGLE"] = 0] = "TOGGLE";
    CameraQuickViewFunction[CameraQuickViewFunction["HOLD"] = 1] = "HOLD";
})(CameraQuickViewFunction || (CameraQuickViewFunction = {}));
var CameraSmartCamera;
(function (CameraSmartCamera) {
    CameraSmartCamera[CameraSmartCamera["TOGGLE"] = 0] = "TOGGLE";
    CameraSmartCamera[CameraSmartCamera["HOLD"] = 1] = "HOLD";
})(CameraSmartCamera || (CameraSmartCamera = {}));
var CameraZoomFunction;
(function (CameraZoomFunction) {
    CameraZoomFunction[CameraZoomFunction["MANUAL"] = 0] = "MANUAL";
    CameraZoomFunction[CameraZoomFunction["FOCUS"] = 1] = "FOCUS";
})(CameraZoomFunction || (CameraZoomFunction = {}));
var CameraFocusMode;
(function (CameraFocusMode) {
    CameraFocusMode[CameraFocusMode["TOGGLE"] = 0] = "TOGGLE";
    CameraFocusMode[CameraFocusMode["HOLD"] = 1] = "HOLD";
})(CameraFocusMode || (CameraFocusMode = {}));
var CameraCockpitCameraSelection;
(function (CameraCockpitCameraSelection) {
    CameraCockpitCameraSelection[CameraCockpitCameraSelection["LANDING"] = 0] = "LANDING";
    CameraCockpitCameraSelection[CameraCockpitCameraSelection["WIDE_ANGLE"] = 1] = "WIDE_ANGLE";
    CameraCockpitCameraSelection[CameraCockpitCameraSelection["CLOSE"] = 2] = "CLOSE";
    CameraCockpitCameraSelection[CameraCockpitCameraSelection["HUD"] = 3] = "HUD";
})(CameraCockpitCameraSelection || (CameraCockpitCameraSelection = {}));
var CameraFreeLookMode;
(function (CameraFreeLookMode) {
    CameraFreeLookMode[CameraFreeLookMode["TOGGLE"] = 0] = "TOGGLE";
    CameraFreeLookMode[CameraFreeLookMode["HOLD"] = 1] = "HOLD";
})(CameraFreeLookMode || (CameraFreeLookMode = {}));
var CameraFreeLookReset;
(function (CameraFreeLookReset) {
    CameraFreeLookReset[CameraFreeLookReset["MANUAL"] = 0] = "MANUAL";
    CameraFreeLookReset[CameraFreeLookReset["AUTO"] = 1] = "AUTO";
})(CameraFreeLookReset || (CameraFreeLookReset = {}));
var CameraHeadUpMode;
(function (CameraHeadUpMode) {
    CameraHeadUpMode[CameraHeadUpMode["TOGGLE"] = 0] = "TOGGLE";
    CameraHeadUpMode[CameraHeadUpMode["HOLD"] = 1] = "HOLD";
})(CameraHeadUpMode || (CameraHeadUpMode = {}));
var CameraCameraShake;
(function (CameraCameraShake) {
    CameraCameraShake[CameraCameraShake["OFF"] = 0] = "OFF";
    CameraCameraShake[CameraCameraShake["ON"] = 1] = "ON";
})(CameraCameraShake || (CameraCameraShake = {}));
var CameraFlashlightMode;
(function (CameraFlashlightMode) {
    CameraFlashlightMode[CameraFlashlightMode["MANUAL"] = 0] = "MANUAL";
    CameraFlashlightMode[CameraFlashlightMode["AUTO"] = 1] = "AUTO";
})(CameraFlashlightMode || (CameraFlashlightMode = {}));
var CameraHomeCockpitMode;
(function (CameraHomeCockpitMode) {
    CameraHomeCockpitMode[CameraHomeCockpitMode["OFF"] = 0] = "OFF";
    CameraHomeCockpitMode[CameraHomeCockpitMode["ON"] = 1] = "ON";
})(CameraHomeCockpitMode || (CameraHomeCockpitMode = {}));
var CameraInstrumentViewMode;
(function (CameraInstrumentViewMode) {
    CameraInstrumentViewMode[CameraInstrumentViewMode["TOGGLE"] = 0] = "TOGGLE";
    CameraInstrumentViewMode[CameraInstrumentViewMode["HOLD"] = 1] = "HOLD";
})(CameraInstrumentViewMode || (CameraInstrumentViewMode = {}));
var CameraInstrumentViewSelection;
(function (CameraInstrumentViewSelection) {
    CameraInstrumentViewSelection[CameraInstrumentViewSelection["MANUAL"] = 0] = "MANUAL";
    CameraInstrumentViewSelection[CameraInstrumentViewSelection["AUTO"] = 1] = "AUTO";
})(CameraInstrumentViewSelection || (CameraInstrumentViewSelection = {}));
var CameraPOVReset;
(function (CameraPOVReset) {
    CameraPOVReset[CameraPOVReset["MANUAL"] = 0] = "MANUAL";
    CameraPOVReset[CameraPOVReset["AUTO"] = 1] = "AUTO";
})(CameraPOVReset || (CameraPOVReset = {}));
var SoundHeadphoneSimulation;
(function (SoundHeadphoneSimulation) {
    SoundHeadphoneSimulation[SoundHeadphoneSimulation["OFF"] = 0] = "OFF";
    SoundHeadphoneSimulation[SoundHeadphoneSimulation["ON"] = 1] = "ON";
})(SoundHeadphoneSimulation || (SoundHeadphoneSimulation = {}));
var SoundWarningSoundsInExternalView;
(function (SoundWarningSoundsInExternalView) {
    SoundWarningSoundsInExternalView[SoundWarningSoundsInExternalView["OFF"] = 0] = "OFF";
    SoundWarningSoundsInExternalView[SoundWarningSoundsInExternalView["ON"] = 1] = "ON";
})(SoundWarningSoundsInExternalView || (SoundWarningSoundsInExternalView = {}));
var SoundVHFSignalDegradation;
(function (SoundVHFSignalDegradation) {
    SoundVHFSignalDegradation[SoundVHFSignalDegradation["OFF"] = 0] = "OFF";
    SoundVHFSignalDegradation[SoundVHFSignalDegradation["ON"] = 1] = "ON";
})(SoundVHFSignalDegradation || (SoundVHFSignalDegradation = {}));
var SoundActiveSpatialSound;
(function (SoundActiveSpatialSound) {
    SoundActiveSpatialSound[SoundActiveSpatialSound["OFF"] = 0] = "OFF";
    SoundActiveSpatialSound[SoundActiveSpatialSound["ON"] = 1] = "ON";
})(SoundActiveSpatialSound || (SoundActiveSpatialSound = {}));
var SoundConvertAudioToMono;
(function (SoundConvertAudioToMono) {
    SoundConvertAudioToMono[SoundConvertAudioToMono["OFF"] = 0] = "OFF";
    SoundConvertAudioToMono[SoundConvertAudioToMono["ON"] = 1] = "ON";
})(SoundConvertAudioToMono || (SoundConvertAudioToMono = {}));
var SoundATCTextToSpeechSettings;
(function (SoundATCTextToSpeechSettings) {
    SoundATCTextToSpeechSettings[SoundATCTextToSpeechSettings["OFF"] = 0] = "OFF";
    SoundATCTextToSpeechSettings[SoundATCTextToSpeechSettings["OFFLINE"] = 1] = "OFFLINE";
    SoundATCTextToSpeechSettings[SoundATCTextToSpeechSettings["AZURE"] = 2] = "AZURE";
})(SoundATCTextToSpeechSettings || (SoundATCTextToSpeechSettings = {}));
var SoundMusicSelection;
(function (SoundMusicSelection) {
    SoundMusicSelection[SoundMusicSelection["COLOR_1"] = 0] = "COLOR_1";
    SoundMusicSelection[SoundMusicSelection["COLOR_2"] = 1] = "COLOR_2";
    SoundMusicSelection[SoundMusicSelection["LEGACY"] = 2] = "LEGACY";
})(SoundMusicSelection || (SoundMusicSelection = {}));
var SoundMuteAudioInBackground;
(function (SoundMuteAudioInBackground) {
    SoundMuteAudioInBackground[SoundMuteAudioInBackground["OFF"] = 0] = "OFF";
    SoundMuteAudioInBackground[SoundMuteAudioInBackground["ON"] = 1] = "ON";
})(SoundMuteAudioInBackground || (SoundMuteAudioInBackground = {}));
var TrafficSelect;
(function (TrafficSelect) {
    TrafficSelect[TrafficSelect["PC"] = 0] = "PC";
    TrafficSelect[TrafficSelect["VR"] = 1] = "VR";
})(TrafficSelect || (TrafficSelect = {}));
var TrafficAircraftTrafficTypePC;
(function (TrafficAircraftTrafficTypePC) {
    TrafficAircraftTrafficTypePC[TrafficAircraftTrafficTypePC["REAL_TIME_ONLINE"] = 0] = "REAL_TIME_ONLINE";
    TrafficAircraftTrafficTypePC[TrafficAircraftTrafficTypePC["AI_OFFLINE"] = 1] = "AI_OFFLINE";
    TrafficAircraftTrafficTypePC[TrafficAircraftTrafficTypePC["OFF"] = 2] = "OFF";
})(TrafficAircraftTrafficTypePC || (TrafficAircraftTrafficTypePC = {}));
var TrafficShowTrafficNameplatesPC;
(function (TrafficShowTrafficNameplatesPC) {
    TrafficShowTrafficNameplatesPC[TrafficShowTrafficNameplatesPC["OFF"] = 0] = "OFF";
    TrafficShowTrafficNameplatesPC[TrafficShowTrafficNameplatesPC["ON"] = 1] = "ON";
})(TrafficShowTrafficNameplatesPC || (TrafficShowTrafficNameplatesPC = {}));
var TrafficUseGenericAircraftModelsPC;
(function (TrafficUseGenericAircraftModelsPC) {
    TrafficUseGenericAircraftModelsPC[TrafficUseGenericAircraftModelsPC["OFF"] = 0] = "OFF";
    TrafficUseGenericAircraftModelsPC[TrafficUseGenericAircraftModelsPC["ON"] = 1] = "ON";
})(TrafficUseGenericAircraftModelsPC || (TrafficUseGenericAircraftModelsPC = {}));
var TrafficShowMultiplayerAircraftInCloseProximityPC;
(function (TrafficShowMultiplayerAircraftInCloseProximityPC) {
    TrafficShowMultiplayerAircraftInCloseProximityPC[TrafficShowMultiplayerAircraftInCloseProximityPC["OFF"] = 0] = "OFF";
    TrafficShowMultiplayerAircraftInCloseProximityPC[TrafficShowMultiplayerAircraftInCloseProximityPC["ON"] = 1] = "ON";
})(TrafficShowMultiplayerAircraftInCloseProximityPC || (TrafficShowMultiplayerAircraftInCloseProximityPC = {}));
var TrafficTrafficVarietyPC;
(function (TrafficTrafficVarietyPC) {
    TrafficTrafficVarietyPC[TrafficTrafficVarietyPC["LOW"] = 0] = "LOW";
    TrafficTrafficVarietyPC[TrafficTrafficVarietyPC["MEDIUM"] = 1] = "MEDIUM";
    TrafficTrafficVarietyPC[TrafficTrafficVarietyPC["HIGH"] = 2] = "HIGH";
    TrafficTrafficVarietyPC[TrafficTrafficVarietyPC["ULTRA"] = 3] = "ULTRA";
})(TrafficTrafficVarietyPC || (TrafficTrafficVarietyPC = {}));
var TrafficAircraftTrafficTypeVR;
(function (TrafficAircraftTrafficTypeVR) {
    TrafficAircraftTrafficTypeVR[TrafficAircraftTrafficTypeVR["REAL_TIME_ONLINE"] = 0] = "REAL_TIME_ONLINE";
    TrafficAircraftTrafficTypeVR[TrafficAircraftTrafficTypeVR["AI_OFFLINE"] = 1] = "AI_OFFLINE";
    TrafficAircraftTrafficTypeVR[TrafficAircraftTrafficTypeVR["OFF"] = 2] = "OFF";
})(TrafficAircraftTrafficTypeVR || (TrafficAircraftTrafficTypeVR = {}));
var TrafficShowTrafficNameplatesVR;
(function (TrafficShowTrafficNameplatesVR) {
    TrafficShowTrafficNameplatesVR[TrafficShowTrafficNameplatesVR["OFF"] = 0] = "OFF";
    TrafficShowTrafficNameplatesVR[TrafficShowTrafficNameplatesVR["ON"] = 1] = "ON";
})(TrafficShowTrafficNameplatesVR || (TrafficShowTrafficNameplatesVR = {}));
var TrafficUseGenericAircraftModelsVR;
(function (TrafficUseGenericAircraftModelsVR) {
    TrafficUseGenericAircraftModelsVR[TrafficUseGenericAircraftModelsVR["OFF"] = 0] = "OFF";
    TrafficUseGenericAircraftModelsVR[TrafficUseGenericAircraftModelsVR["ON"] = 1] = "ON";
})(TrafficUseGenericAircraftModelsVR || (TrafficUseGenericAircraftModelsVR = {}));
var TrafficShowMultiplayerAircraftInCloseProximityVR;
(function (TrafficShowMultiplayerAircraftInCloseProximityVR) {
    TrafficShowMultiplayerAircraftInCloseProximityVR[TrafficShowMultiplayerAircraftInCloseProximityVR["OFF"] = 0] = "OFF";
    TrafficShowMultiplayerAircraftInCloseProximityVR[TrafficShowMultiplayerAircraftInCloseProximityVR["ON"] = 1] = "ON";
})(TrafficShowMultiplayerAircraftInCloseProximityVR || (TrafficShowMultiplayerAircraftInCloseProximityVR = {}));
var TrafficTrafficVarietyVR;
(function (TrafficTrafficVarietyVR) {
    TrafficTrafficVarietyVR[TrafficTrafficVarietyVR["LOW"] = 0] = "LOW";
    TrafficTrafficVarietyVR[TrafficTrafficVarietyVR["MEDIUM"] = 1] = "MEDIUM";
    TrafficTrafficVarietyVR[TrafficTrafficVarietyVR["HIGH"] = 2] = "HIGH";
    TrafficTrafficVarietyVR[TrafficTrafficVarietyVR["ULTRA"] = 3] = "ULTRA";
})(TrafficTrafficVarietyVR || (TrafficTrafficVarietyVR = {}));
var DataOnlineFunctionality;
(function (DataOnlineFunctionality) {
    DataOnlineFunctionality[DataOnlineFunctionality["OFF"] = 0] = "OFF";
    DataOnlineFunctionality[DataOnlineFunctionality["ON"] = 1] = "ON";
})(DataOnlineFunctionality || (DataOnlineFunctionality = {}));
var DataBingDataWorldGraphics;
(function (DataBingDataWorldGraphics) {
    DataBingDataWorldGraphics[DataBingDataWorldGraphics["OFF"] = 0] = "OFF";
    DataBingDataWorldGraphics[DataBingDataWorldGraphics["ON"] = 1] = "ON";
})(DataBingDataWorldGraphics || (DataBingDataWorldGraphics = {}));
var DataPhotogrammetry;
(function (DataPhotogrammetry) {
    DataPhotogrammetry[DataPhotogrammetry["OFF"] = 0] = "OFF";
    DataPhotogrammetry[DataPhotogrammetry["ON"] = 1] = "ON";
})(DataPhotogrammetry || (DataPhotogrammetry = {}));
var DataLiveRealWorldAirTraffic;
(function (DataLiveRealWorldAirTraffic) {
    DataLiveRealWorldAirTraffic[DataLiveRealWorldAirTraffic["OFF"] = 0] = "OFF";
    DataLiveRealWorldAirTraffic[DataLiveRealWorldAirTraffic["ON"] = 1] = "ON";
})(DataLiveRealWorldAirTraffic || (DataLiveRealWorldAirTraffic = {}));
var DataLiveWeather;
(function (DataLiveWeather) {
    DataLiveWeather[DataLiveWeather["OFF"] = 0] = "OFF";
    DataLiveWeather[DataLiveWeather["ON"] = 1] = "ON";
})(DataLiveWeather || (DataLiveWeather = {}));
var DataMultiplayer;
(function (DataMultiplayer) {
    DataMultiplayer[DataMultiplayer["OFF"] = 0] = "OFF";
    DataMultiplayer[DataMultiplayer["ON"] = 1] = "ON";
})(DataMultiplayer || (DataMultiplayer = {}));
var DataDataLimitation;
(function (DataDataLimitation) {
    DataDataLimitation[DataDataLimitation["OFF"] = 0] = "OFF";
    DataDataLimitation[DataDataLimitation["ON"] = 1] = "ON";
})(DataDataLimitation || (DataDataLimitation = {}));
var DataBandwidth;
(function (DataBandwidth) {
    DataBandwidth[DataBandwidth["UNLIMITED"] = 0] = "UNLIMITED";
    DataBandwidth[DataBandwidth["_5_MBIT_S"] = 1] = "_5_MBIT_S";
    DataBandwidth[DataBandwidth["_20_MBIT_S"] = 2] = "_20_MBIT_S";
    DataBandwidth[DataBandwidth["_40_MBIT_S"] = 3] = "_40_MBIT_S";
})(DataBandwidth || (DataBandwidth = {}));
var DataRollingCache;
(function (DataRollingCache) {
    DataRollingCache[DataRollingCache["OFF"] = 0] = "OFF";
    DataRollingCache[DataRollingCache["ON"] = 1] = "ON";
})(DataRollingCache || (DataRollingCache = {}));
var FlightModelFlightModel;
(function (FlightModelFlightModel) {
    FlightModelFlightModel[FlightModelFlightModel["LEGACY"] = 0] = "LEGACY";
    FlightModelFlightModel[FlightModelFlightModel["MODERN"] = 1] = "MODERN";
})(FlightModelFlightModel || (FlightModelFlightModel = {}));
var FlightModelGlobalPreset;
(function (FlightModelGlobalPreset) {
    FlightModelGlobalPreset[FlightModelGlobalPreset["FSX"] = 0] = "FSX";
    FlightModelGlobalPreset[FlightModelGlobalPreset["INTERMEDIATE"] = 1] = "INTERMEDIATE";
    FlightModelGlobalPreset[FlightModelGlobalPreset["REALISTIC"] = 2] = "REALISTIC";
})(FlightModelGlobalPreset || (FlightModelGlobalPreset = {}));
var MiscLanguage;
(function (MiscLanguage) {
    MiscLanguage[MiscLanguage["EN_US"] = 0] = "EN_US";
    MiscLanguage[MiscLanguage["FR_FR"] = 1] = "FR_FR";
    MiscLanguage[MiscLanguage["ES_ES"] = 2] = "ES_ES";
    MiscLanguage[MiscLanguage["ES_MX"] = 3] = "ES_MX";
    MiscLanguage[MiscLanguage["DE_DE"] = 4] = "DE_DE";
    MiscLanguage[MiscLanguage["IT_IT"] = 5] = "IT_IT";
    MiscLanguage[MiscLanguage["NL_NL"] = 6] = "NL_NL";
    MiscLanguage[MiscLanguage["NB_NO"] = 7] = "NB_NO";
    MiscLanguage[MiscLanguage["SV_SE"] = 8] = "SV_SE";
    MiscLanguage[MiscLanguage["FI_FI"] = 9] = "FI_FI";
    MiscLanguage[MiscLanguage["PL_PL"] = 10] = "PL_PL";
    MiscLanguage[MiscLanguage["RU_RU"] = 11] = "RU_RU";
    MiscLanguage[MiscLanguage["PT_BR"] = 12] = "PT_BR";
    MiscLanguage[MiscLanguage["JA_JP"] = 13] = "JA_JP";
    MiscLanguage[MiscLanguage["PT_PT"] = 14] = "PT_PT";
    MiscLanguage[MiscLanguage["ZH_CN"] = 15] = "ZH_CN";
    MiscLanguage[MiscLanguage["KO_KR"] = 16] = "KO_KR";
    MiscLanguage[MiscLanguage["TR_TR"] = 17] = "TR_TR";
})(MiscLanguage || (MiscLanguage = {}));
var MiscUnitsOfMeasurement;
(function (MiscUnitsOfMeasurement) {
    MiscUnitsOfMeasurement[MiscUnitsOfMeasurement["US_SYSTEM"] = 0] = "US_SYSTEM";
    MiscUnitsOfMeasurement[MiscUnitsOfMeasurement["METRIC_SYSTEM"] = 1] = "METRIC_SYSTEM";
    MiscUnitsOfMeasurement[MiscUnitsOfMeasurement["HYBRID"] = 2] = "HYBRID";
})(MiscUnitsOfMeasurement || (MiscUnitsOfMeasurement = {}));
var MiscPilotAvatar;
(function (MiscPilotAvatar) {
    MiscPilotAvatar[MiscPilotAvatar["DEFAULT"] = 0] = "DEFAULT";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_1"] = 1] = "PILOT_1";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_2"] = 2] = "PILOT_2";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_3"] = 3] = "PILOT_3";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_4"] = 4] = "PILOT_4";
    MiscPilotAvatar[MiscPilotAvatar["CPT_MIKE_BARNES"] = 5] = "CPT_MIKE_BARNES";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_6"] = 6] = "PILOT_6";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_7"] = 7] = "PILOT_7";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_8"] = 8] = "PILOT_8";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_9"] = 9] = "PILOT_9";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_10"] = 10] = "PILOT_10";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_11"] = 11] = "PILOT_11";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_12"] = 12] = "PILOT_12";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_13"] = 13] = "PILOT_13";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_14"] = 14] = "PILOT_14";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_15"] = 15] = "PILOT_15";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_16"] = 16] = "PILOT_16";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_17"] = 17] = "PILOT_17";
    MiscPilotAvatar[MiscPilotAvatar["CPT_JESS_MOLINA"] = 18] = "CPT_JESS_MOLINA";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_19"] = 19] = "PILOT_19";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_20"] = 20] = "PILOT_20";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_21"] = 21] = "PILOT_21";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_22"] = 22] = "PILOT_22";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_23"] = 23] = "PILOT_23";
    MiscPilotAvatar[MiscPilotAvatar["PILOT_24"] = 24] = "PILOT_24";
    MiscPilotAvatar[MiscPilotAvatar["LT_SIMON_HERNANDEZ"] = 25] = "LT_SIMON_HERNANDEZ";
    MiscPilotAvatar[MiscPilotAvatar["LT_DIANA_DRAYER"] = 26] = "LT_DIANA_DRAYER";
})(MiscPilotAvatar || (MiscPilotAvatar = {}));
var MiscCoPilotAvatar;
(function (MiscCoPilotAvatar) {
    MiscCoPilotAvatar[MiscCoPilotAvatar["DEFAULT"] = 0] = "DEFAULT";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_1"] = 1] = "PILOT_1";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_2"] = 2] = "PILOT_2";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_3"] = 3] = "PILOT_3";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_4"] = 4] = "PILOT_4";
    MiscCoPilotAvatar[MiscCoPilotAvatar["CPT_MIKE_BARNES"] = 5] = "CPT_MIKE_BARNES";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_6"] = 6] = "PILOT_6";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_7"] = 7] = "PILOT_7";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_8"] = 8] = "PILOT_8";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_9"] = 9] = "PILOT_9";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_10"] = 10] = "PILOT_10";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_11"] = 11] = "PILOT_11";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_12"] = 12] = "PILOT_12";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_13"] = 13] = "PILOT_13";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_14"] = 14] = "PILOT_14";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_15"] = 15] = "PILOT_15";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_16"] = 16] = "PILOT_16";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_17"] = 17] = "PILOT_17";
    MiscCoPilotAvatar[MiscCoPilotAvatar["CPT_JESS_MOLINA"] = 18] = "CPT_JESS_MOLINA";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_19"] = 19] = "PILOT_19";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_20"] = 20] = "PILOT_20";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_21"] = 21] = "PILOT_21";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_22"] = 22] = "PILOT_22";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_23"] = 23] = "PILOT_23";
    MiscCoPilotAvatar[MiscCoPilotAvatar["PILOT_24"] = 24] = "PILOT_24";
    MiscCoPilotAvatar[MiscCoPilotAvatar["LT_SIMON_HERNANDEZ"] = 25] = "LT_SIMON_HERNANDEZ";
    MiscCoPilotAvatar[MiscCoPilotAvatar["LT_DIANA_DRAYER"] = 26] = "LT_DIANA_DRAYER";
})(MiscCoPilotAvatar || (MiscCoPilotAvatar = {}));
var MiscInstructor;
(function (MiscInstructor) {
    MiscInstructor[MiscInstructor["DEFAULT"] = 0] = "DEFAULT";
    MiscInstructor[MiscInstructor["CPT_MIKE_BARNES"] = 1] = "CPT_MIKE_BARNES";
    MiscInstructor[MiscInstructor["CPT_JESS_MOLINA"] = 2] = "CPT_JESS_MOLINA";
})(MiscInstructor || (MiscInstructor = {}));
var MiscMilitaryInstructor;
(function (MiscMilitaryInstructor) {
    MiscMilitaryInstructor[MiscMilitaryInstructor["DEFAULT"] = 0] = "DEFAULT";
    MiscMilitaryInstructor[MiscMilitaryInstructor["LT_SIMON_HERNANDEZ"] = 1] = "LT_SIMON_HERNANDEZ";
    MiscMilitaryInstructor[MiscMilitaryInstructor["LT_DIANA_DRAYER"] = 2] = "LT_DIANA_DRAYER";
})(MiscMilitaryInstructor || (MiscMilitaryInstructor = {}));
var AccessibilityEnableScreenNarrator;
(function (AccessibilityEnableScreenNarrator) {
    AccessibilityEnableScreenNarrator[AccessibilityEnableScreenNarrator["OFF"] = 0] = "OFF";
    AccessibilityEnableScreenNarrator[AccessibilityEnableScreenNarrator["ON"] = 1] = "ON";
})(AccessibilityEnableScreenNarrator || (AccessibilityEnableScreenNarrator = {}));
var AccessibilityCockpitInteractionSystem;
(function (AccessibilityCockpitInteractionSystem) {
    AccessibilityCockpitInteractionSystem[AccessibilityCockpitInteractionSystem["LOCK"] = 0] = "LOCK";
    AccessibilityCockpitInteractionSystem[AccessibilityCockpitInteractionSystem["LEGACY"] = 1] = "LEGACY";
})(AccessibilityCockpitInteractionSystem || (AccessibilityCockpitInteractionSystem = {}));
var AccessibilityMenuTooltips;
(function (AccessibilityMenuTooltips) {
    AccessibilityMenuTooltips[AccessibilityMenuTooltips["OFF"] = 0] = "OFF";
    AccessibilityMenuTooltips[AccessibilityMenuTooltips["ON"] = 1] = "ON";
})(AccessibilityMenuTooltips || (AccessibilityMenuTooltips = {}));
var AccessibilityInstrumentNameTooltips;
(function (AccessibilityInstrumentNameTooltips) {
    AccessibilityInstrumentNameTooltips[AccessibilityInstrumentNameTooltips["OFF"] = 0] = "OFF";
    AccessibilityInstrumentNameTooltips[AccessibilityInstrumentNameTooltips["INSTANT"] = 1] = "INSTANT";
    AccessibilityInstrumentNameTooltips[AccessibilityInstrumentNameTooltips["DELAYED"] = 2] = "DELAYED";
})(AccessibilityInstrumentNameTooltips || (AccessibilityInstrumentNameTooltips = {}));
var AccessibilityInstrumentDescriptionTooltips;
(function (AccessibilityInstrumentDescriptionTooltips) {
    AccessibilityInstrumentDescriptionTooltips[AccessibilityInstrumentDescriptionTooltips["OFF"] = 0] = "OFF";
    AccessibilityInstrumentDescriptionTooltips[AccessibilityInstrumentDescriptionTooltips["INSTANT"] = 1] = "INSTANT";
    AccessibilityInstrumentDescriptionTooltips[AccessibilityInstrumentDescriptionTooltips["DELAYED"] = 2] = "DELAYED";
})(AccessibilityInstrumentDescriptionTooltips || (AccessibilityInstrumentDescriptionTooltips = {}));
var AccessibilityMainColor;
(function (AccessibilityMainColor) {
    AccessibilityMainColor[AccessibilityMainColor["DEFAULT"] = 0] = "DEFAULT";
    AccessibilityMainColor[AccessibilityMainColor["DEFAULT_HIGH_CONTRAST"] = 1] = "DEFAULT_HIGH_CONTRAST";
    AccessibilityMainColor[AccessibilityMainColor["PROTANOPIA"] = 2] = "PROTANOPIA";
    AccessibilityMainColor[AccessibilityMainColor["PROTANOPIA_HIGH_CONTRAST"] = 3] = "PROTANOPIA_HIGH_CONTRAST";
    AccessibilityMainColor[AccessibilityMainColor["DEUTERANOPIA"] = 4] = "DEUTERANOPIA";
    AccessibilityMainColor[AccessibilityMainColor["DEUTERANOPIA_HIGH_CONTRAST"] = 5] = "DEUTERANOPIA_HIGH_CONTRAST";
    AccessibilityMainColor[AccessibilityMainColor["TRITANOPIA"] = 6] = "TRITANOPIA";
    AccessibilityMainColor[AccessibilityMainColor["TRITANOPIA_HIGH_CONTRAST"] = 7] = "TRITANOPIA_HIGH_CONTRAST";
})(AccessibilityMainColor || (AccessibilityMainColor = {}));
var AccessibilityMenuAnimations;
(function (AccessibilityMenuAnimations) {
    AccessibilityMenuAnimations[AccessibilityMenuAnimations["OFF"] = 0] = "OFF";
    AccessibilityMenuAnimations[AccessibilityMenuAnimations["ON"] = 1] = "ON";
})(AccessibilityMenuAnimations || (AccessibilityMenuAnimations = {}));
var AccessibilitySkipPreFlightCinematics;
(function (AccessibilitySkipPreFlightCinematics) {
    AccessibilitySkipPreFlightCinematics[AccessibilitySkipPreFlightCinematics["OFF"] = 0] = "OFF";
    AccessibilitySkipPreFlightCinematics[AccessibilitySkipPreFlightCinematics["ON"] = 1] = "ON";
})(AccessibilitySkipPreFlightCinematics || (AccessibilitySkipPreFlightCinematics = {}));
var AccessibilityDPadMenuNavigation;
(function (AccessibilityDPadMenuNavigation) {
    AccessibilityDPadMenuNavigation[AccessibilityDPadMenuNavigation["OFF"] = 0] = "OFF";
    AccessibilityDPadMenuNavigation[AccessibilityDPadMenuNavigation["ON"] = 1] = "ON";
})(AccessibilityDPadMenuNavigation || (AccessibilityDPadMenuNavigation = {}));
var AccessibilitySubtitles;
(function (AccessibilitySubtitles) {
    AccessibilitySubtitles[AccessibilitySubtitles["OFF"] = 0] = "OFF";
    AccessibilitySubtitles[AccessibilitySubtitles["ON"] = 1] = "ON";
})(AccessibilitySubtitles || (AccessibilitySubtitles = {}));
var AccessibilitySubtitleTextColor;
(function (AccessibilitySubtitleTextColor) {
    AccessibilitySubtitleTextColor[AccessibilitySubtitleTextColor["WHITE"] = 0] = "WHITE";
    AccessibilitySubtitleTextColor[AccessibilitySubtitleTextColor["BLACK"] = 1] = "BLACK";
    AccessibilitySubtitleTextColor[AccessibilitySubtitleTextColor["RED"] = 2] = "RED";
    AccessibilitySubtitleTextColor[AccessibilitySubtitleTextColor["BLUE"] = 3] = "BLUE";
    AccessibilitySubtitleTextColor[AccessibilitySubtitleTextColor["YELLOW"] = 4] = "YELLOW";
    AccessibilitySubtitleTextColor[AccessibilitySubtitleTextColor["GREEN"] = 5] = "GREEN";
})(AccessibilitySubtitleTextColor || (AccessibilitySubtitleTextColor = {}));
var AccessibilitySubtitleBackgroundColor;
(function (AccessibilitySubtitleBackgroundColor) {
    AccessibilitySubtitleBackgroundColor[AccessibilitySubtitleBackgroundColor["WHITE"] = 0] = "WHITE";
    AccessibilitySubtitleBackgroundColor[AccessibilitySubtitleBackgroundColor["BLACK"] = 1] = "BLACK";
    AccessibilitySubtitleBackgroundColor[AccessibilitySubtitleBackgroundColor["RED"] = 2] = "RED";
    AccessibilitySubtitleBackgroundColor[AccessibilitySubtitleBackgroundColor["BLUE"] = 3] = "BLUE";
    AccessibilitySubtitleBackgroundColor[AccessibilitySubtitleBackgroundColor["YELLOW"] = 4] = "YELLOW";
    AccessibilitySubtitleBackgroundColor[AccessibilitySubtitleBackgroundColor["GREEN"] = 5] = "GREEN";
    AccessibilitySubtitleBackgroundColor[AccessibilitySubtitleBackgroundColor["GREY"] = 6] = "GREY";
    AccessibilitySubtitleBackgroundColor[AccessibilitySubtitleBackgroundColor["CYAN"] = 7] = "CYAN";
})(AccessibilitySubtitleBackgroundColor || (AccessibilitySubtitleBackgroundColor = {}));
var DevelopersDeveloperMode;
(function (DevelopersDeveloperMode) {
    DevelopersDeveloperMode[DevelopersDeveloperMode["OFF"] = 0] = "OFF";
    DevelopersDeveloperMode[DevelopersDeveloperMode["ON"] = 1] = "ON";
})(DevelopersDeveloperMode || (DevelopersDeveloperMode = {}));
var VRModeGrabYoke;
(function (VRModeGrabYoke) {
    VRModeGrabYoke[VRModeGrabYoke["HOLD"] = 0] = "HOLD";
    VRModeGrabYoke[VRModeGrabYoke["TOGGLE"] = 1] = "TOGGLE";
})(VRModeGrabYoke || (VRModeGrabYoke = {}));
var ExperimentalReplayTool;
(function (ExperimentalReplayTool) {
    ExperimentalReplayTool[ExperimentalReplayTool["OFF"] = 0] = "OFF";
    ExperimentalReplayTool[ExperimentalReplayTool["ON"] = 1] = "ON";
})(ExperimentalReplayTool || (ExperimentalReplayTool = {}));
var ExperimentalLowPowerMode;
(function (ExperimentalLowPowerMode) {
    ExperimentalLowPowerMode[ExperimentalLowPowerMode["OFF"] = 0] = "OFF";
    ExperimentalLowPowerMode[ExperimentalLowPowerMode["ON"] = 1] = "ON";
})(ExperimentalLowPowerMode || (ExperimentalLowPowerMode = {}));
var ExperimentalUseNanoVGForXMLGauges;
(function (ExperimentalUseNanoVGForXMLGauges) {
    ExperimentalUseNanoVGForXMLGauges[ExperimentalUseNanoVGForXMLGauges["OFF"] = 0] = "OFF";
    ExperimentalUseNanoVGForXMLGauges[ExperimentalUseNanoVGForXMLGauges["ON"] = 1] = "ON";
})(ExperimentalUseNanoVGForXMLGauges || (ExperimentalUseNanoVGForXMLGauges = {}));
var ExperimentalPackageReorderTool;
(function (ExperimentalPackageReorderTool) {
    ExperimentalPackageReorderTool[ExperimentalPackageReorderTool["OFF"] = 0] = "OFF";
    ExperimentalPackageReorderTool[ExperimentalPackageReorderTool["ON"] = 1] = "ON";
})(ExperimentalPackageReorderTool || (ExperimentalPackageReorderTool = {}));
this.store = {
    sync_clouds: false,
    only_metar: false,
    scale: '100'
};
this.$api.datastore.import(this.store);
const self2 = this;
let active = false;
let updateInterval;
settings_define({
    only_metar: {
        label: 'Only surface winds',
        description: 'Only sync surface winds, skip winds aloft',
        type: "checkbox",
        value: this.store.only_metar,
        changed(value) {
            this.store.only_metar = value;
            this.$api.datastore.export(this.store);
        },
    },
    scale: {
        label: 'Wind scaling (%)',
        description: "Allows you to scale down the wind, set as a percentage (example, '50' would be 50% of the current winds). 0 - 100 are valid values",
        type: "text",
        value: this.store.scale,
        changed(value) {
            let val = `${value}`.replace(/\D+/g, '');
            if (!val || isNaN(+val)) {
                val = '100';
            }
            let val2 = +value;
            val2 = Math.min(100, Math.max(0, val2));
            this.store.scale = val2;
            this.$api.datastore.export(this.store);
        },
    }
});
style(() => {
    return active ? 'active' : null;
});
run(() => {
    active = !active;
    if (!active) {
        if (updateInterval) {
            console.log("stopping wx updates");
            clearInterval(updateInterval);
        }
        return;
    }
    this.$api.datastore.export(this.store);
    let lon = this.$api.variables.get("PLANE LONGITUDE", "Degrees");
    let lat = this.$api.variables.get("PLANE LATITUDE", "Degrees");
    if (!lon || !lat) {
        return;
    }
    triggerUpdate(lat, lon);
    if (updateInterval === undefined) {
        updateInterval = setInterval(() => {
            lon = this.$api.variables.get("PLANE LONGITUDE", "Degrees");
            lat = this.$api.variables.get("PLANE LATITUDE", "Degrees");
            if (!lon || !lat) {
                return;
            }
            void triggerUpdate(lat, lon, true);
        }, 1000 * 60 * 15);
    }
});
exit(() => {
    console.log("stopping wx updates");
    clearInterval(updateInterval);
});
const triggerUpdate = (lat, lon, doInterpolate = false) => __awaiter(void 0, void 0, void 0, function* () {
    let vatsimWx;
    let meteoWx;
    try {
        vatsimWx = yield updateVatsim(lat, lon);
    }
    catch (err) {
        console.log("Failed fetching VATSIM wx");
        console.log(err.message);
    }
    try {
        meteoWx = yield updateMeteo(lat, lon);
    }
    catch (err) {
        console.log("error updating meteo wx");
        console.log(err.message);
    }
    updateWx(vatsimWx, meteoWx, doInterpolate);
});
const updateWx = (vatsim, meteo, doInterpolate = false) => {
    const currentWx = this.$api.weather.get_weather();
    console.log(`updating weather near ${vatsim === null || vatsim === void 0 ? void 0 : vatsim.icao}`);
    if (vatsim !== undefined) {
        let groundWind = currentWx.tWindLayers[0];
        currentWx.tWindLayers[0] = Object.assign(Object.assign({}, groundWind), { dvAltitude: {
                "__Type": "RangeDataValue",
                "ID": 0,
                "icon": "",
                "name": "ALTITUDE",
                "valueStr": "",
                "value": 0,
                "type": "",
                "unit": "Ft",
                "quality": 0,
                "html": "",
                "userTag": 0,
                "min": -1640,
                "max": 60000,
                "step": 10,
                "clamp_min": -1640,
                "clamp_max": 60000,
                "percent": 0
            }, "dvAngleRad": {
                "__Type": "RangeDataValue",
                "ID": 0,
                "icon": "",
                "name": "TT:MENU.WEATHER_WIND_FROM",
                "valueStr": "",
                "value": degToRad(vatsim.wind.degrees),
                "type": "",
                "unit": "°",
                "quality": 0,
                "html": "",
                "userTag": 0,
                "min": 0,
                "max": 6.2831854820251465,
                "step": 0.01745329238474369,
                "clamp_min": 0,
                "clamp_max": 6.2831854820251465,
                "percent": 0
            }, "dvSpeed": {
                "__Type": "RangeDataValue",
                "ID": 0,
                "icon": "",
                "name": "TT:MENU.WEATHER_TOOLBAR_PANEL_WIND_LAYER_SETTINGS_SPEED",
                "valueStr": "",
                "value": vatsim.wind.speed_kts * (parseInt(self2.store.scale) / 100),
                "type": "",
                "unit": "Kts",
                "quality": 0,
                "html": "",
                "userTag": 0,
                "min": 0,
                "max": 150.0064697265625,
                "step": 1,
                "clamp_min": 0,
                "clamp_max": 150.0064697265625,
                "percent": 0
            }, gustWaveData: {
                __Type: "GustWaveData",
                "dvAngleRad": {
                    "__Type": "RangeDataValue",
                    "ID": 0,
                    "icon": "",
                    "name": "TT:MENU.WEATHER_WIND_FROM",
                    "valueStr": "",
                    "value": 0,
                    "type": "",
                    "unit": "°",
                    "quality": 0,
                    "html": "",
                    "userTag": 0,
                    "min": 0,
                    "max": 6.2831854820251465,
                    "step": 0.01745329238474369,
                    "clamp_min": 0,
                    "clamp_max": 6.2831854820251465,
                    "percent": 0
                },
                "dvIntervalS": {
                    "__Type": "RangeDataValue",
                    "ID": 0,
                    "icon": "",
                    "name": "TT:MENU.WEATHER_TOOLBAR_PANEL_WIND_LAYER_SETTINGS_GUST_PER_MINUTE",
                    "valueStr": "",
                    "value": 0,
                    "type": "",
                    "unit": "",
                    "quality": 0,
                    "html": "",
                    "userTag": 0,
                    "min": 1,
                    "max": 18,
                    "step": 1,
                    "clamp_min": 1,
                    "clamp_max": 18,
                    "percent": 0
                },
                "dvSpeedMultiplier": {
                    "__Type": "RangeDataValue",
                    "ID": 0,
                    "icon": "",
                    "name": "TT:MENU.WEATHER_TOOLBAR_PANEL_WIND_LAYER_SETTINGS_SPEED",
                    "valueStr": "",
                    "value": 0,
                    "type": "",
                    "unit": "Kts",
                    "quality": 0,
                    "html": "",
                    "userTag": 0,
                    "min": 0,
                    "max": 2,
                    "step": 0.009999999776482582,
                    "clamp_min": 0,
                    "clamp_max": 2,
                    "percent": 0
                }
            } });
        currentWx.oSettings.dvMSLGLTemperature = {
            "__Type": "RangeDataValue",
            "ID": 0,
            "icon": "",
            "name": "Temperature MSL / ISA + 10",
            "valueStr": "",
            "value": vatsim.temperature.fahrenheit,
            "type": "",
            "unit": "°F",
            "quality": 0,
            "html": "",
            "userTag": 0,
            "min": -130,
            "max": 140,
            "step": 32.900001525878906,
            "clamp_min": -130,
            "clamp_max": 140,
            "percent": 0
        };
        currentWx.oSettings.dvMSLPressure = {
            "__Type": "RangeDataValue",
            "ID": 0,
            "icon": "",
            "name": "Pressure MSL",
            "valueStr": "",
            "value": vatsim.barometer.hg,
            "type": "",
            "unit": "inHg",
            "quality": 0,
            "html": "",
            "userTag": 0,
            "min": 27.994535446166992,
            "max": 32.01062774658203,
            "step": 0.007382525131106377,
            "clamp_min": 27.994535446166992,
            "clamp_max": 32.01062774658203,
            "percent": 0
        };
        if (meteo) {
            currentWx.tWindLayers = [currentWx.tWindLayers[0]];
            meteo.layers.forEach((layer) => {
                currentWx.tWindLayers.push({
                    "__Type": "WindLayerData",
                    "dvAltitude": {
                        "__Type": "RangeDataValue",
                        "ID": 0,
                        "icon": "",
                        "name": "ALTITUDE",
                        "valueStr": "",
                        "value": layer.altitude,
                        "type": "",
                        "unit": "Ft",
                        "quality": 0,
                        "html": "",
                        "userTag": 0,
                        "min": -1640,
                        "max": 60000,
                        "step": 10,
                        "clamp_min": -1640,
                        "clamp_max": 60000,
                        "percent": 0
                    },
                    "dvAngleRad": {
                        "__Type": "RangeDataValue",
                        "ID": 0,
                        "icon": "",
                        "name": "TT:MENU.WEATHER_WIND_FROM",
                        "valueStr": "",
                        "value": degToRad(layer.windDirection),
                        "type": "",
                        "unit": "°",
                        "quality": 0,
                        "html": "",
                        "userTag": 0,
                        "min": 0,
                        "max": 6.2831854820251465,
                        "step": 0.01745329238474369,
                        "clamp_min": 0,
                        "clamp_max": 6.2831854820251465,
                        "percent": 0
                    },
                    "dvSpeed": {
                        "__Type": "RangeDataValue",
                        "ID": 0,
                        "icon": "",
                        "name": "TT:MENU.WEATHER_TOOLBAR_PANEL_WIND_LAYER_SETTINGS_SPEED",
                        "valueStr": "",
                        "value": layer.windSpeed * (parseInt(self2.store.scale) / 100),
                        "type": "",
                        "unit": "Kts",
                        "quality": 0,
                        "html": "",
                        "userTag": 0,
                        "min": 0,
                        "max": 150.0064697265625,
                        "step": 1,
                        "clamp_min": 0,
                        "clamp_max": 150.0064697265625,
                        "percent": 0
                    },
                    "gustWaveData": {
                        "__Type": "GustWaveData",
                        "dvAngleRad": {
                            "__Type": "RangeDataValue",
                            "ID": 0,
                            "icon": "",
                            "name": "TT:MENU.WEATHER_WIND_FROM",
                            "valueStr": "",
                            "value": 0,
                            "type": "",
                            "unit": "°",
                            "quality": 0,
                            "html": "",
                            "userTag": 0,
                            "min": 0,
                            "max": 6.2831854820251465,
                            "step": 0.01745329238474369,
                            "clamp_min": 0,
                            "clamp_max": 6.2831854820251465,
                            "percent": 0
                        },
                        "dvIntervalS": {
                            "__Type": "RangeDataValue",
                            "ID": 0,
                            "icon": "",
                            "name": "TT:MENU.WEATHER_TOOLBAR_PANEL_WIND_LAYER_SETTINGS_GUST_PER_MINUTE",
                            "valueStr": "",
                            "value": 0,
                            "type": "",
                            "unit": "",
                            "quality": 0,
                            "html": "",
                            "userTag": 0,
                            "min": 1,
                            "max": 18,
                            "step": 1,
                            "clamp_min": 1,
                            "clamp_max": 18,
                            "percent": 0
                        },
                        "dvSpeedMultiplier": {
                            "__Type": "RangeDataValue",
                            "ID": 0,
                            "icon": "",
                            "name": "TT:MENU.WEATHER_TOOLBAR_PANEL_WIND_LAYER_SETTINGS_SPEED",
                            "valueStr": "",
                            "value": 0,
                            "type": "",
                            "unit": "Kts",
                            "quality": 0,
                            "html": "",
                            "userTag": 0,
                            "min": 0,
                            "max": 2,
                            "step": 0.009999999776482582,
                            "clamp_min": 0,
                            "clamp_max": 2,
                            "percent": 0
                        }
                    }
                });
            });
        }
    }
    this.$api.weather.set_weather(currentWx);
    console.log(`updated weather near ${vatsim === null || vatsim === void 0 ? void 0 : vatsim.icao}`);
};
const updateMeteo = (lat, lon) => __awaiter(void 0, void 0, void 0, function* () {
    if (self2.store.only_metar) {
        return undefined;
    }
    const d = new Date();
    const date = `${d.getUTCFullYear()}-${leftPad(d.getUTCMonth() + 1, 2)}-${leftPad(d.getUTCDate(), 2)}`;
    console.log("update meteo");
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=windspeed_950hPa,windspeed_925hPa,windspeed_900hPa,windspeed_850hPa,windspeed_800hPa,windspeed_700hPa,windspeed_600hPa,windspeed_500hPa,windspeed_400hPa,windspeed_300hPa,windspeed_250hPa,windspeed_200hPa,windspeed_150hPa,windspeed_100hPa,winddirection_950hPa,winddirection_925hPa,winddirection_900hPa,winddirection_850hPa,winddirection_800hPa,winddirection_700hPa,winddirection_600hPa,winddirection_500hPa,winddirection_400hPa,winddirection_300hPa,winddirection_250hPa,winddirection_200hPa,winddirection_150hPa,winddirection_100hPa,geopotential_height_950hPa,geopotential_height_925hPa,geopotential_height_900hPa,geopotential_height_850hPa,geopotential_height_800hPa,geopotential_height_700hPa,geopotential_height_600hPa,geopotential_height_500hPa,geopotential_height_400hPa,geopotential_height_300hPa,geopotential_height_250hPa,geopotential_height_200hPa,geopotential_height_150hPa,geopotential_height_100hPa&windspeed_unit=kn&&start_date=${date}&end_date=${date}`;
    return fetch(url)
        .then(res => res.json())
        .then(data => {
        const aloft = data.hourly.time.reduce((acc, dateTime, idx) => {
            const row = {
                time: new Date(dateTime),
                layers: []
            };
            row.layers = [
                "900hPa",
                "850hPa",
                "800hPa",
                "700hPa",
                "600hPa",
                "500hPa",
                "400hPa",
                "300hPa",
                "250hPa",
                "200hPa",
                "150hPa",
                "100hPa"
            ].map(pres => {
                let altKey = `geopotential_height_${pres}`;
                let dirKey = `winddirection_${pres}`;
                let speedKey = `windspeed_${pres}`;
                return {
                    altitude: metersToFeet(data.hourly[altKey][idx]),
                    windDirection: data.hourly[dirKey][idx],
                    windSpeed: data.hourly[speedKey][idx],
                };
            });
            acc.push(row);
            return acc;
        }, []);
        const nearestTime = aloft.reduce((acc, item) => {
            if (acc === null) {
                return item;
            }
            if (Math.abs(+d - +item.time) < Math.abs(+d - +acc.time)) {
                acc = item;
            }
            return acc;
        }, null);
        return nearestTime || undefined;
    });
});
const updateVatsim = (lat, lon) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        self2.$api.airports.find_airports_by_coords("ranbogmord-vatsim-winds", lon, lat, 1000 * 1000, 100, (airports) => {
            if (airports.length === 0) {
                console.log("no aiports");
                return resolve(undefined);
            }
            console.log("update vatsim");
            airports.sort((a, b) => {
                return getDistance(lat, lon, a.lat, a.lon) < getDistance(lat, lon, b.lat, b.lon) ? -1 : 1;
            });
            const icaos = airports.map(airport => airport.icao).join(",");
            const url = `https://metar.ranbogmord.com/metar/${icaos}`;
            fetch(url, {
                method: 'GET'
            })
                .then((res) => __awaiter(void 0, void 0, void 0, function* () {
                return yield res.json();
            }))
                .then(data => {
                if (data.length === 0) {
                    console.log("no metars found");
                    return resolve(undefined);
                }
                resolve(data[0]);
            })
                .catch(err => {
                reject(err);
            });
        }, (airports) => { }, (airports) => { }, true);
    });
});
function getDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371;
    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance;
}
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}
const leftPad = (val, length) => {
    return ("00000000" + `${val}`).slice(-length);
};
const metersToFeet = (meters) => {
    const feetPerMeter = 3.28084;
    return meters * feetPerMeter;
};
