/**
 * 玩家承受伤害唯一处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingDamageEvent, organ, EntityHurtCustomModel):void>}
 */
const madlcorganPlayerBearOnlyStrategies = {
    //测试
    'madlc:ceshi': function (event, organ, data) {
        let type = event.source.type
        let amount = event.amount
        let time = event.entity.server.getTickCount()
        event.entity.server.runCommandSilent(`say ${`收到伤害类型： ${type.toString()} ，伤害： ${amount.toString()} 点by ${time.toString()}Time`}`)
    },
     //合金肋骨（左）
    'madlc:hejinleiguzuo': function (event, organ, data) {
        let count = event.entity.persistentData.getInt(resourceCount)??0
        if (count >= 1) {
            event.amount = event.amount - 1
            updateResourceCount(event.entity, count - 1)
        }
    },
     //机械肋骨（左）
     'madlc:mechanical_ribs_zuo': function (event, organ, data) {
        let count = event.entity.persistentData.getInt(resourceCount)??0
        if (count >= 20) {
            event.amount = event.amount - 10
            updateResourceCount(event.entity, count - 5)
        }
    },
    //合金肋骨（右）
    'madlc:hejinleiguyou': function (event, organ, data) {
        let count = event.entity.persistentData.getInt(resourceCount)??0
        if (count >= 1) {
            event.amount = event.amount * 0.9
            updateResourceCount(event.entity, count - 1)
        }
    },
    //机械肋骨（右）
    'madlc:mechanical_ribs_yuo': function (event, organ, data) {
        let count = event.entity.persistentData.getInt(resourceCount)??0
        if (count >= 10) {
            event.amount = event.amount * 0.6
            updateResourceCount(event.entity, count - 5)
        }
    },
    //钢铁外壳
    'madlc:steel_shell': function (event, organ, data) {
         // 获取玩家
         let player = event.entity
         // 获取攻击者
         let source = event.source.actual
         // 如果存在攻击者
         if (source) {
             // 延迟一刻执行，防止可能出现的死循环堆积在同一tick内
             source.getServer().scheduleInTicks(1, () => {
                 // 如果没有这个，会攻击到非生物实体，比如掉落物
                 if (source.isLiving()) {
                     // 攻击,DamageSource为伤害源，后一个数值是伤害数值
                     source.attack(DamageSource.playerAttack(player), event.amount)
                 }
             })
         }
     },
    //机械盾牌
    'madlc:mechanical_shield': function (event, organ, data) {
        let player = event.entity
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:machine')) {
                amplifier = amplifier + typeMap.get('kubejs:machine').length
    }
        if (typeMap.has('kubejs:resource')) {
                amplifier = amplifier + typeMap.get('kubejs:resource').length
    }
        let random = Math.random()* 100 
        if(amplifier >= random){
            event.amount = 0
            //播放音效（写错了，不生效）
           //player.getServer().runCommandSilent('playsound minecraft:anvil_land player @a ' + player.x + ' ' + player.y + ' ' + player.z)
        }

},
    //可充能式不死图腾
    'madlc:charged_totem_of_undying': function (event, organ, data) {
        let player = event.entity
        let count = event.entity.persistentData.getInt(resourceCount)??0
        let maxHealth = player.getMaxHealth()
        if (event.amount < player.getHealth()) {
            return
        }
        if (player.getCooldowns().isOnCooldown(Item.of(organ.id))) {
            return
        }
        player.addItemCooldown(organ.id, 20 * 30)
        if (count >= 1000){
           event.amount = 0
           player.heal(maxHealth * 0.5)
           updateResourceCount(event.entity, count - 1000)
       }
},
    //僵尸之心
    'madlc:zombie_heart': function (event, organ, data) {
        if (event.source.getType() == 'drown' ) {
            event.amount = 0
        }
},
   //黄金之爱——僵尸猪灵
   'madlc:golden_love1': function (event, organ, data) {
    let player = event.entity
   
    if (player.getHeadArmorItem() != 'minecraft:golden_helmet' && player.getHeadArmorItem() !='bygonenether:gilded_netherite_helmet') return
    if (player.getChestArmorItem() != 'minecraft:golden_chestplate' && player.getChestArmorItem() != 'bygonenether:gilded_netherite_chestplate')return
    if (player.getLegsArmorItem() != 'minecraft:golden_leggings' && player.getLegsArmorItem() != 'bygonenether:gilded_netherite_leggings') return
    if (player.getFeetArmorItem() != 'minecraft:golden_boots' && player.getFeetArmorItem() !='bygonenether:gilded_netherite_boots') return
    event.amount = event.amount * 0.4
},
//古老的不死图腾
'madlc:totem_of_undying1': function (event, organ, data) {
    let player = event.entity
    let maxHealth = player.getMaxHealth()
    if (event.amount < player.getHealth()) {
        return
    }
    if (player.getCooldowns().isOnCooldown(Item.of(organ.id))) {
        return
    }
    player.addItemCooldown(organ.id, 20 * 600)
       event.amount = 0
       player.heal(maxHealth * 0.3)
},

}
    var assign_organ_player_bear_Only = Object.assign( organPlayerBearOnlyStrategies,  madlcorganPlayerBearOnlyStrategies)