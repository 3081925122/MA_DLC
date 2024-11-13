/**
 * 造成伤害唯一处理策略
 * 对应.tag('kubejs:damage_only')
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent, organ, EntityHurtCustomModel):void>}
 */
const madlcOrganPlayerDamageOnlyStrategies = {
 //测试
 'madlc:ceshi': function (event, organ, data) {
    let type = event.source.type
        let amount = event.amount
        let time = event.source.player.server.getTickCount()
        
        event.source.player.server.runCommandSilent(`say ${`造成伤害类型： ${type.toString()} ，伤害： ${amount.toString()} 点by ${time.toString()}Time`}`)    
},
//增幅装置——红石
'madlc:amplification_device_redstone': function (event, organ, data) {
    if (event.source.type != 'cataclysm.laser') return
        let player = event.source.player
        let count = player.persistentData.getInt(resourceCount)??0
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:machine')) {
        amplifier = amplifier + typeMap.get('kubejs:machine').length
     }
        if (typeMap.has('kubejs:resource')) {
        amplifier = amplifier + typeMap.get('kubejs:resource').length
    }
        let a = amplifier / 3
        let minoritem = player.offHandItem
        if ((minoritem?.id == 'cataclysm:laser_gatling')) {
                event.amount = event.amount * (a + (count / 200))
        }
    },
//增幅装置——切割
'madlc:amplification_device_cutting': function (event, organ, data) {
    if (event.source.type != 'cataclysm.shredder' ) return
        let player = event.source.player
        let count = player.persistentData.getInt(resourceCount)??0
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:machine')) {
        amplifier = amplifier + typeMap.get('kubejs:machine').length
     }
        if (typeMap.has('kubejs:resource')) {
        amplifier = amplifier + typeMap.get('kubejs:resource').length
    } 
        let mainitem = player.mainHandItem
        if ((mainitem?.id == 'cataclysm:meat_shredder')) {
                event.amount = event.amount * (amplifier + (count / 100))
        }
    },
//高级雷龙心脏
'madlc:lightning_dragon_heart1': function (event, organ, data) {
    let player = event.source.player
    let typeMap = getPlayerChestCavityTypeMap(player)
    let amplifier = 0
        if (typeMap.has('kubejs:dragon')) {
                amplifier = amplifier + typeMap.get('kubejs:dragon').length
     event.entity.invulnerableTime = 0.5 - amplifier * 0.5 /27
}},
//微型分解工厂
'madlc:micro_processing_factory': function (event, organ, data) {
    let player = event.source.player
    let count = event.entity.persistentData.getInt(resourceCount)??0
    if (player.getCooldowns().isOnCooldown(Item.of(organ.id))) {
        return
    }
    player.addItemCooldown(organ.id, 2)
    updateResourceCount(event.entity, count + 30)
    getPlayerMagicData(player).addMana(30)
},
//魂火
'madlc:soul_fire': function (event, organ, data) {
    if (event.source.type != 'arrow' ) return
    let random = Math.random()* 100 
     if(random >= 50){
            event.amount = event.amount * 2
     }
    },
//黄金之爱——蛮兵
'madlc:golden_love3': function (event, organ, data) {
    let player = event.source.player
    let maxHealth = player.getMaxHealth()
    let Health = player.getHealth()
    if (event.source.type != 'player' ) return
    if (player.getMainHandItem() != 'minecraft:golden_sword' && player.getMainHandItem() != 'minecraft:golden_axe' )return
            event.amount = (event.amount + maxHealth / 2 ) * (1 + Math.min((maxHealth - Health) / 10,3))
    },
//灾厄之魂——卫道士
'madlc:soul_disaster': function (event, organ, data) {
    let player = event.source.player
    let mainitem = player.mainHandItem
    if (mainitem.hasTag('forge:axes')){
        event.amount = event.amount * 1.4
    }
    if  (mainitem?.id == 'tetra:modular_double' && mainitem.nbt && mainitem.nbt.contains("double/annihilator_axe_left_material")){
        event.amount = event.amount * 1.4
    }
    },


}
var assign_organ_player_damage_only = Object.assign(organPlayerDamageOnlyStrategies, madlcOrganPlayerDamageOnlyStrategies);