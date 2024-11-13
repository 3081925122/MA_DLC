// priority: 10

/**
 * 获取机械飞升点数
 * @param {Internal.ServerPlayer} player 
 * @returns {Number}
 */
function maGetComputingPower(player) {
    if (!player) return 0;
    let typeMap = getPlayerChestCavityTypeMap(player)
    let count = 0
    let onlySet = new Set()
    if (typeMap.has('kubejs:resource')) {
        count += typeMap.get('kubejs:resource').length
        typeMap.get('kubejs:resource').forEach(organ => {
            if (!onlySet.has(organ.id) && organ.id in maComputingPowerStrategies) {
                onlySet.add(organ.id)
                count += maComputingPowerStrategies[organ.id](player, organ)
            }
        });
    }
    return count
}

/**
 * 获取机械飞升点数处理策略
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer,organ):number>}
 */
const maComputingPowerStrategies = {
    //机械肋骨左
    'madlc:mechanical_ribs_zuo': function (player, organ) {
        return 1
    },
    //机械肋骨右
    'madlc:mechanical_ribs_yuo': function (player, organ) {
        return 1
    },
    //机械胃
    'madlc:jixiewei': function (player, organ) {
        return 1
    },
    //机械发条改
    'madlc:jixiefatiaogai': function (player, organ) {
        return 1
    },
    //简陋红色熔炉
    'madlc:primitive_redstone_furnace': function (player, organ) {
        return 1
    },
    //烈焰熔炉
    'madlc:flaming_furnace': function (player, organ) {
        return 1
    },
    //夜视仪
    'madlc:night_vision_device': function (player, organ) {
        return 1
    },
    //变速齿轮（三档）
    'madlc:gearbox3': function (player, organ) {
        return 1
    },
    //资源点库
    'madlc:energy_storage': function (player, organ) {
        return 1
    },
    //喷气推进器（升级改良）
    'madlc:jet_propeller_gai': function (player, organ) {
        return 1
    },
    //魔力转化器
    'madlc:magic_monverter': function (player, organ) {
        return 1
    },
    //微型心火核心
    'madlc:small_burning_heart': function (player, organ) {
        return 1
    },
    //后备隐藏能源
    'madlc:hidden_reserve_energy': function (player, organ) {
        return 1
    },
    //多功能机械臂
    'madlc:multi_functional_robotic_arm': function (player, organ) {
        return 1
    },
    //动力臂
    'madlc:steam_powered_mechanical_arm': function (player, organ) {
        return 1
    },
    //龙炎动力臂
    'madlc:fire_steam_powered_mechanical_arm': function (player, organ) {
        return 1
    },
    //凋零动力臂
    'madlc:storm_steam_powered_mechanical_arm': function (player, organ) {
        return 1
    },
    //纳米修复昆虫
    'madlc:nanorepair_insect': function (player, organ) {
        return 1
    },
    //精细机械手
    'madlc:precision_manipulator': function (player, organ) {
        return 1
    },
    //增幅装置——红石
    'madlc:amplification_device_redstone': function (player, organ) {
        return 1
    },
    //净化装置
    'madlc:cleaning_device': function (player, organ) {
        return 1
    },
    //机械盾牌
    'madlc:mechanical_shield': function (player, organ) {
        return 1
    },
    //可充能式不死图腾
    'madlc:charged_totem_of_undying': function (player, organ) {
        return 1
    },
    //增幅装置——切割
    'madlc:amplification_device_cutting': function (player, organ) {
        return 1
    },
    //微型加工工厂
    'madlc:micro_processing_factory': function (player, organ) {
        return 1
    },
}