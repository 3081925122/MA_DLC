/**
 * 
 * @param {Map} itemMap 
 * @param {Map} typeMap 
 * @returns {Number} 
 */
function getFishInWarpSubCount(itemMap, typeMap) {
    let organCount = 0
    if (itemMap.has('kubejs:fish_in_warp')) {
        if (typeMap.has('kubejs:warp')) {
            organCount = typeMap.get('kubejs:warp').length * 1 + organCount
        }
    }
    if (itemMap.has('madlc:fish_in_food')) {
        if (typeMap.has('kubejs:food')) {
           organCount = typeMap.get('kubejs:food').length * 1 + organCount
        }
    }
    return organCount
}
