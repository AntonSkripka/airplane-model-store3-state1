export function getBackgroundCardTitleColor(aircraftType) {
    switch (aircraftType) {
        case "plane":
            return "backgroundPlane";
        case "biplane":
            return "backgroundBiplane";
        case "helicopter":
            return "backgroundHelicopter";
        default:
            return "planesTitle";
    }
}