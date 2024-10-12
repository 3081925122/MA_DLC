/**
 * 玩家Tick秒级策略
 * @constant
 * @type {Object<string,function(Internal.SimplePlayerEventJS, organ):void>}
 */
const  madlcorganPlayerTickStrategies = {
    //机械发条（改）
    'madlc:jixiefatiaogai': function (event, organ) {
        let player = event.player
        let count = player.persistentData.getInt(resourceCount)
        if (player.isSprinting()) {
            let speed = Math.floor(player.getSpeed() * 40)
            updateResourceCount(player, count + speed)
        }
    },

    //机械胃
    'madlc:jixiewei': function (event,organ) {
        let count = event.entity.persistentData.getInt(resourceCount)??0
        let player = event.player
        if (count >= 2) {
            if (player.health != player.maxHealth && player.health < player.maxHealth) {
                player.heal(1)
                updateResourceCount(event.entity, count - 2)
                if (player.hasEffect('farmersdelight:nourishment')) {
                    // 获取已有的滋养效果
                    let effect = player.getEffect('farmersdelight:nourishment')
                    // 获取效果等级
                    let amplifier = effect.getAmplifier()
                    // 获取效果时长
                    let duration = effect.getDuration()
                    // 增加效果
                    player.potionEffects.add('farmersdelight:nourishment', duration + 20 * 3, amplifier)
                }
                // 否则执行以下逻辑
                else {
                    // 增加效果
                    player.potionEffects.add('farmersdelight:nourishment', 20 * 3, 0)
                }
            }
            }
    },

    //夜视仪
    'madlc:night_vision_device': function (event,organ){
        let count = event.entity.persistentData.getInt(resourceCount)??0
        let player = event.player
        let effect = player.getEffect('minecraft:night_vision')
            if (count >= 50) {
                if (player.hasEffect('minecraft:night_vision')) {
                    // 获取已有的夜视效果
                    let effect = player.getEffect('minecraft:night_vision')
                    // 获取效果等级
                    let amplifier = effect.getAmplifier()
                    // 获取效果时长
                    let duration = effect.getDuration()
                    if (duration <= 20 * 60){
                    // 增加效果
                    player.potionEffects.add('minecraft:night_vision', duration + 20 * 60, amplifier)
                    updateResourceCount(event.entity, count - 50)
                }}
                // 否则执行以下逻辑
                else { 
                    // 增加效果
                    player.potionEffects.add('minecraft:night_vision', 20 * 60, 0)
                    updateResourceCount(event.entity, count - 50)
                }
            }
            }
        }
var assign_organ_player_player_tick = Object.assign( organPlayerTickStrategies,  madlcorganPlayerTickStrategies)

/**
 * 玩家Tick秒级唯一策略
 * 是的，这玩意是每秒而非每刻执行一次
 * 对应.tag('kubejs:player_tick_only')
 * @constant
 * @type {Object<string,function(Internal.SimplePlayerEventJS, organ):void>}
 */
const madlcOrganPlayerTickOnlyStrategies = {
    //魔力转化器
    'madlc:magic_monverter':function(event,organ){
        let player = event.player
        let manaMax = player.getAttributeTotalValue('irons_spellbooks:max_mana')
        let count = event.entity.persistentData.getInt(resourceCount)??0
        let magicData = getPlayerMagicData(player)
        let manaCost = magicData.getMana()
        updateResourceCount(player, count + manaMax * 0.01 )
        magicData.setMana(Math.max((manaCost - manaMax * 0.02), 0))
    },
    //微型心火核心
    'madlc:small_burning_heart': function (event, organ) {
    let count = event.entity.persistentData.getInt(resourceCount) ?? 0;
    let player = event.player;
    if (count >= 10) {
        if (player.hasEffect('kubejs:flaring_heart')) {
            let effect = player.getEffect('kubejs:flaring_heart');
            let amplifier = effect.getAmplifier();
            let duration = effect.getDuration();
            if (duration <= 20 * 4) {
                player.potionEffects.add('kubejs:flaring_heart', 20 * 4, amplifier);
                if (amplifier < 2) {
                    player.potionEffects.add('kubejs:flaring_heart', 20 * 4, amplifier + 1);
                }
            }
        }
        else {
            if (count >= 10)
            player.potionEffects.add('kubejs:flaring_heart', 20 * 4, 0);
        }
        updateResourceCount(event.entity, count - 10);
    }
}
}
var assign_organ_player_tick_only = Object.assign(organPlayerTickOnlyStrategies, madlcOrganPlayerTickOnlyStrategies);