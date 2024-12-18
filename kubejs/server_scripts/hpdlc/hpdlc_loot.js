// priority: 9

/**
 * 器官实体掉落唯一策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const hpdlcEntityLootOnlyStrategies = {
    //微型分解工厂
    'hpdlc:micro_processing_factory': function (event, organ) {
        let player = event.getPlayer()
        let count = 1
        let a = maGetComputingPower(player)
        while (a--) {
            if (Math.random() < 0.025) {
                count++
            }
        }
        event.loot.forEach(loot => {
            loot.setCount(loot.getCount() * count)
        })
    },

}
var assign_entity_loot_only = Object.assign(entityLootOnlyStrategies, hpdlcEntityLootOnlyStrategies);

/**
 * 器官箱子掉落唯一策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const hpdlcChestLootOnlyStrategies = {
    // 示例器官-唯一箱子战利品
    
    'hpdlc:chicken_appendix': function (event, organ) {
        let player = event.player
        let luck = Math.max(player.getLuck(), 1)
        let random = Math.random() * 110
        if (Math.random() * 100 < 10 + luck / 5){
            if(100< random && random<=110){event.removeLoot(ItemFilter.ALWAYS_TRUE)}
            if(95< random && random<=100){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:protection', luck / 10)) }
            if(90< random && random<=95){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', luck / 10)) }
            if(85< random && random<=90){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:looting', luck / 10))}
            if(80< random && random<=85){event.addLoot(Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', luck / 10)) }
            if(75< random && random<=80){event.addLoot(Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', luck / 10)) }

            if(70< random && random<=75){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:respiration', luck / 10)) }
            if(65< random && random<=70){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:aqua_affinity', luck / 10))}
            if(60< random && random<=65){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:thorns', luck / 10)) }
            if(55< random && random<=60){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:depth_strider', luck / 10)) }
            if(50< random && random<=55){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:soul_speed', luck / 10)) }

            if(45< random && random<=50){event.addLoot(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', luck / 10)) }
            if(40< random && random<=45){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:swift_sneak', luck / 10)) }
            if(35< random && random<=40){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:sweeping', luck / 10)) }
            if(30< random && random<=35){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:smite', luck / 10)) }
            if(25< random && random<=30){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', luck / 10)) }

            if(20< random && random<=25){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', luck / 10)) }
            if(15< random && random<=20){event.addLoot( Item.of('minecraft:enchanted_book').enchant('kubejs:tele_operation', luck / 10)) }
            if(10< random && random<=15){event.addLoot( Item.of('minecraft:enchanted_book').enchant('kubejs:tele_operation', luck / 10)) }
            if(5< random && random<=10){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:mending', luck / 10)) }
            if(0< random && random<=5){event.addLoot( Item.of('minecraft:enchanted_book').enchant('minecraft:power', luck / 10)) }
        }
    },
}

var assign_chest_loot_only = Object.assign(chestLootOnlyStrategies, hpdlcChestLootOnlyStrategies);