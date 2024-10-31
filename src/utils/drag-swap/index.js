export function findContainer(containers, image) {
    return Object.keys(containers).find((key) => containers[key].includes(image));
}
