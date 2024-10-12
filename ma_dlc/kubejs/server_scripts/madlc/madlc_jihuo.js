/**
 * 器官激活策略
 * 对应.tag('kubejs:active')
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ, Map):void>}
 */
const madlcorganActiveStrategies = {
    //资源库
    'madlc:energy_storage': function (player, organ, attributeMap) {
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + 300)
    },

    //烈焰熔炉
    'madlc:flaming_furnace': function (player, organ, attributeMap) {
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + 100)
    },

    //喷气推进器（升级改良）
    'madlc:jet_propeller_gai': function (player, organ, attributeMap) {
            player.getPersistentData().putBoolean('madlcjetpropellergai', true)
            player.abilities.mayfly = true
            player.onUpdateAbilities()
    }}

var assign_organ_active = Object.assign(organActiveStrategies, madlcorganActiveStrategies)

/**
 * 器官激活唯一策略
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ, Map):void>}
 */
const madlcorganActiveOnlyStrategies = {
    
    //中枢芯片
    'madlc:cpu': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:machine')) {
                amplifier = amplifier + typeMap.get('kubejs:machine').length
     }
        let a = amplifier * 3
        let b = amplifier * 3
        let c = amplifier * 20
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, a)
        attributeMapValueAddition(attributeMap, global.ATTACK_UP, b)
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + c)
        },
    //魔力转化器
       'madlc:magic_monverter':function(player,organ,attributeMap) {
        let manaMax = player.getAttributeTotalValue('irons_spellbooks:max_mana')
        let a = manaMax / 2000
        let b = manaMax / 1000
        let c = manaMax / 20
        attributeMapValueAddition(attributeMap, global.CRITICAL_HIT, a)
        attributeMapValueAddition(attributeMap, global.CRITICAL_DAMAGE, b)
        attributeMapValueAddition(attributeMap, global.ATTACK_UP, c)
    },
    //机械肋骨（左）
        'madlc:mechanical_ribs_zuo': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        let pos = organ.Slot
        // 取对称位置坐标
        let opPos = getOppoPos(pos)
        if (posMap.has(opPos) && posMap.get(opPos).id == 'madlc:mechanical_ribs_yuo') {
            attributeMapValueAddition(attributeMap, global.ARMOR,Math.round(10))
        }
    },
    //机械肋骨（右）
        'madlc:mechanical_ribs_yuo': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player)
        let pos = organ.Slot
        // 取对称位置坐标
        let opPos = getOppoPos(pos)
        if (posMap.has(opPos) && posMap.get(opPos).id == 'madlc:mechanical_ribs_zuo') {
            attributeMapValueAddition(attributeMap, global.ARMOR_TOUGHNESS, Math.round(10))
        }
    },
    //后备隐藏能源
    'madlc:hidden_reserve_energy': function (player, organ, attributeMap) {
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + 1000)
    },
    //多功能机械臂
    'madlc:multi_functional_robotic_arm': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.ATTACK_RANGE, 3)
        attributeMapValueAddition(attributeMap, global.REACH_DISTANCE, 3)
    },
}
var assign_organ_active_only = Object.assign(organActiveOnlyStrategies, madlcorganActiveOnlyStrategies)