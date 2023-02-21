import { buildImageUrl } from "cloudinary-build-url";

export function buildImage(public_id: string) {
  const image = buildImageUrl(public_id, {
    cloud: {
      cloudName: "marvinkome",
    },
  });

  const blurred = buildImageUrl(public_id, {
    cloud: {
      cloudName: "marvinkome",
    },
    transformations: {
      effect: "blue:1000",
      quality: 1,
    },
  });

  return {
    src: image,
    blurDataURL: blurred,
  };
}
