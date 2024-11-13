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
            let speed = Math.floor(player.getSpeed() * 40)
            updateResourceCount(player, count + speed)
    },

    //夜视仪
    'madlc:night_vision_device': function (event,organ){
        let count = event.entity.persistentData.getInt(resourceCount)??0
        let player = event.player
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
            },
    //动力臂
    'madlc:steam_powered_mechanical_arm': function (event,organ){
        let player = event.player
        let count = event.entity.persistentData.getInt(resourceCount)??0
        if (count >= 2) {
            updateResourceCount(event.entity, count - 2)
        }
        else{
            if (player.hasEffect('minecraft:weakness')) {
                // 获取已有虚弱的效果
                let effect = player.getEffect('minecraft:weakness')
                // 获取效果等级
                let amplifier = effect.getAmplifier()
                // 获取效果时长
                let duration = effect.getDuration()
                if (duration <= 20 * 60){
                // 增加效果
                player.potionEffects.add('minecraft:weakness', duration + 20 * 60, amplifier)
            }}
            // 否则执行以下逻辑
            else { 
                // 增加效果
                player.potionEffects.add('minecraft:weakness', 20 * 60, 0)
            }
        }
        }  ,
     //龙炎动力臂
     'madlc:fire_steam_powered_mechanical_arm': function (event,organ){
        let player = event.player
        let count = event.entity.persistentData.getInt(resourceCount)??0
        if (count >= 4) {
            updateResourceCount(event.entity, count - 4)
        }
        else{
            if (player.hasEffect('minecraft:weakness')) {
                // 获取已有虚弱的效果
                let effect = player.getEffect('minecraft:weakness')
                // 获取效果等级
                let amplifier = effect.getAmplifier()
                // 获取效果时长
                let duration = effect.getDuration()
                if (duration <= 20 * 60){
                // 增加效果
                player.potionEffects.add('minecraft:weakness', duration + 20 * 60, amplifier)
            }}
            // 否则执行以下逻辑
            else { 
                // 增加效果
                player.potionEffects.add('minecraft:weakness', 20 * 60, 0)
            }
        }
        }  ,
    //凋零动力臂
    'madlc:storm_steam_powered_mechanical_arm': function (event,organ){
        let player = event.player
        let count = event.entity.persistentData.getInt(resourceCount)??0
        if (count >= 8) {
            updateResourceCount(event.entity, count - 8)
        }
        else{
            if (player.hasEffect('witherstormmod:wither_sickness')) {
                // 获取已有效果
                let effect = player.getEffect('witherstormmod:wither_sickness')
                // 获取效果等级
                let amplifier = effect.getAmplifier()
                // 获取效果时长
                let duration = effect.getDuration()
                if (duration <= 20 * 60){
                // 增加效果
                player.potionEffects.add('witherstormmod:wither_sickness', duration + 20 * 60, amplifier)
            }}
            // 否则执行以下逻辑
            else { 
                // 增加效果
                player.potionEffects.add('witherstormmod:wither_sickness', 20 * 60, 0)
            }
        }
        },
    //僵尸之心
    'madlc:zombie_heart': function (event,organ){
        let player = event.player
        let random = Math.random() * 100
        if (random < 2) {
            if (player.hasEffect('minecraft:weakness')) {
                // 获取已有效果
                let effect = player.getEffect('minecraft:weakness')
                // 获取效果等级
                let amplifier = effect.getAmplifier()
                // 获取效果时长
                let duration = effect.getDuration()
                if (duration <= 20 * 60){
                // 增加效果
                player.potionEffects.add('minecraft:weakness', duration + 20 * 10 , amplifier)
            }}
            // 否则执行以下逻辑
            else { 
                // 增加效果
                player.potionEffects.add('minecraft:weakness', 20 * 10, 0)
            }
        }
        },
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
        let player = event.player;
        let count = event.entity.persistentData.getInt(resourceCount) ?? 0;
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
},
//纳米修复昆虫
    'madlc:nanorepair_insect':function(event,organ){
        let player = event.player;
        let typeMap = getPlayerChestCavityTypeMap(player);
        let count = event.entity.persistentData.getInt(resourceCount) ?? 0;
        let amplifier = 0
        if (typeMap.has('kubejs:resource')) {
            amplifier = typeMap.get('kubejs:resource').length
 }
          let a = Math.floor (amplifier / 3);
           if(count >= a){
            if (player.health != player.maxHealth && player.health < player.maxHealth) {
                player.heal(a)
                updateResourceCount(event.entity, count - a)
           }
        }
    },
    //变速齿轮（改）
    'madlc:gearbox_gai':function(event,organ){
    let player = event.player
    if (player.hasEffect('minecraft:haste')) {
        // 获取已有的夜视效果
        let effect = player.getEffect('minecraft:haste')
        // 获取效果等级
        let amplifier = effect.getAmplifier()
        // 获取效果时长
        let duration = effect.getDuration()
        if (duration <= 20 * 60){
        // 增加效果
        player.potionEffects.add('minecraft:haste', duration + 20 * 60, amplifier)
    }}
    // 否则执行以下逻辑
    else { 
        // 增加效果
        player.potionEffects.add('minecraft:haste', 20 * 60, 0)
    }
},
    //净化装置
    'madlc:cleaning_device':function(event,organ){
        let entity = event.entity
        let harmfulEffects = []
        entity.potionEffects.active.forEach(ctx => {
            if (ctx.effect.CC_IsHarmful()) {
                harmfulEffects.push(ctx.effect)
            }
        })
        if (harmfulEffects.length > 0) {
            harmfulEffects.forEach(effect => {
                entity.removeEffect(effect)
            })
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
    //工具箱
    'madlc:toolbox': function (event,organ) {
        let player = event.player
        let count = event.entity.persistentData.getInt(resourceCount)??0
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        let mainitem = player.mainHandItem
        if (count >= maxCount / 2 ) {
            if (mainitem.damageValue >= 20)
            mainitem.damageValue -= 20
            updateResourceCount(event.entity, count - 20)
        }
},
    //僵尸之心
    'madlc:zombie_heart': function (event,organ) {
    let entity = event.entity
    let player = event.player
    if (player.hasEffect('minecraft:poison')) {
    entity.removeEffect('minecraft:poison')
}
},
    //黄金之爱——猪灵
    'madlc:golden_love2': function (event,organ) {
    let player = event.player
    if (player.getHeadArmorItem() != 'minecraft:golden_helmet' && player.getHeadArmorItem() !='bygonenether:gilded_netherite_helmet') return
    if (player.getChestArmorItem() != 'minecraft:golden_chestplate' && player.getChestArmorItem() != 'bygonenether:gilded_netherite_chestplate')return
    if (player.getLegsArmorItem() != 'minecraft:golden_leggings' && player.getLegsArmorItem() != 'bygonenether:gilded_netherite_leggings') return
    if (player.getFeetArmorItem() != 'minecraft:golden_boots' && player.getFeetArmorItem() !='bygonenether:gilded_netherite_boots') return
    player.getHeadArmorItem().nbt.merge({ Unbreakable: 1 })
    player.getChestArmorItem().nbt.merge({ Unbreakable: 1 })
    player.getLegsArmorItem().nbt.merge({ Unbreakable: 1 })
    player.getFeetArmorItem().nbt.merge({ Unbreakable: 1 })
    if (player.getMainHandItem() != 'minecraft:golden_sword' && player.getMainHandItem() != 'minecraft:golden_axe' )return
        player.getMainHandItem().nbt.merge({ Unbreakable: 1 })
    },



}
var assign_organ_player_tick_only = Object.assign(organPlayerTickOnlyStrategies, madlcOrganPlayerTickOnlyStrategies);