/**
 * 器官方块破坏唯一策略
 * @constant
 * @type {Object<string,function(Internal.BlockBrokenEventJS, organ):void>}
 */
const madlcorganBlockBrokenOnlyStrategies = {

//精细机械手
'madlc:precision_manipulator': function (event, organ) {
    event.block.popItem(event.block.getItem())
    event.block.set('minecraft:air')
    event.cancel()
    },

//采集锤
//代码借鉴了b站up主 是孤梦啊
'madlc:chain_collection_hammer': function (event, organ) {
        let player = event.getPlayer();
            let posList = [];
            let maxMultiple = MultipleBlockConfig.maxMultiple;
            let block = event.getBlock();
            let level = block.getLevel();
            let tempCount = 0;
            let multiple = addMultipleBlocks(block, posList)
            posList = multiple.list;
            let listBlock = multiple.blockList
            let listBlock2 = []
            let count = event.entity.persistentData.getInt(resourceCount)??0
            if (player.isCrouching()) {
            if (count >= 2) {
            for (let index = 1; index < maxMultiple; index = posList.length) {
                listBlock.forEach(blockValue => {
                    if (blockValue == null) return;
                    multiple = addMultipleBlocks(blockValue, posList)
                    posList = multiple.list;
                    listBlock2 = listBlock2.concat(multiple.blockList)
                })
                listBlock = listBlock2;
                listBlock2 = []
                if (tempCount == index) break;
                else tempCount = index;
            }
            posList.forEach(pos => {
                 //应该是连锁
                level.destroyBlock(BlockPos.of(pos), true, player)
            })
            //减少资源点
            updateResourceCount(event.entity, count - 2)
        }}
    /**
     * 
     * @param {Internal.BlockContainerJS} block
     * @param {Array} list 
     */
    function addMultipleBlocks(block, list) {
        let blockList = []
    
        pushList(equalBlock(block.getUp(), block), list, blockList);
        pushList(equalBlock(block.getDown(), block), list, blockList);
        pushList(equalBlock(block.getWest(), block), list, blockList);
        pushList(equalBlock(block.getNorth(), block), list, blockList);
        pushList(equalBlock(block.getSouth(), block), list, blockList);
        pushList(equalBlock(block.getEast(), block), list, blockList);
    
        return {
            blockList: blockList,
            list: list
        }
    }
    
    function pushList(block, list1, list2) {
        if (block != null && !list1.includes(block.getPos().asLong())) {
            list1.push(block.getPos().asLong())
            list2.push(block)
        }
    }
    
    function equalBlock(block1, block2) {
        return block1.getId() == block2.getId() ? block1 : null;
    }
    
}

}
var assign_organ_block_broken_only = Object.assign(organBlockBrokenOnlyStrategies, madlcorganBlockBrokenOnlyStrategies);