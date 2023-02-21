import { buildImageUrl } from "cloudinary-build-url";

export function buildImage(public_id: string) {
  return buildImageUrl(public_id, {
    cloud: {
      cloudName: "marvinkome",
    },
  });
}
