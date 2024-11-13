// priority: 9

/**
 * 器官按键激活策略
 * 对应.tag('kubejs:key_pressed')
 * @constant
 * @type {Object<string,function(Internal.NetworkEventJS, organ):void>}
 */
const madlcOrganPlayerKeyPressedOnlyStrategies = {
    //后备隐藏能源
    'madlc:hidden_reserve_energy': function (event, organ) {
        let player = event.player
        let count = player.persistentData.getInt(resourceCount)
        let entityList = getLivingWithinRadius(player.getLevel(), new Vec3(player.x, player.y, player.z), 10)
        if (player.getCooldowns().isOnCooldown(Item.of(organ.id))) {
            return
        }
        player.addItemCooldown(organ.id, 20 * 1800)
        let explosion = event.player.block.createExplosion()
        player.getServer().runCommandSilent('playsound minecraft:entity.generic.explode player @a ' + player.x + ' ' + player.y + ' ' + player.z)
        explosion.strength(10)
        explosion.causesFire(true)
        explosion.explode()
        entityList.forEach(entity => {
                entity.attack(DamageSource.playerAttack(player).bypassArmor().bypassEnchantments().bypassInvul().bypassMagic(), count * 10000)
                entity.invulnerableTime = 0
                updateResourceCount(player, 0)
        })
    },
    //金色书龙鳞片
    'madlc:book_wyrm_scale1': function (event, organ) {
    const player = event.player;
    const mainHand = player.getMainHandItem();
    if (!mainHand.isEmpty()) {
        const currentLevel = player.xpLevel;
        if (currentLevel >= 45) {
            const enchantments = mainHand.getEnchantmentLevel();
            const keys = Object.keys(enchantments);
            if (keys.length > 0) {
                mainHand.addEnchantment(enchantments, 8)
                player.addXPLevels(-45);
            }
        }
    }
    },
}
var assign_organ_player_key_pressed_only = Object.assign(organPlayerKeyPressedOnlyStrategies, madlcOrganPlayerKeyPressedOnlyStrategies);