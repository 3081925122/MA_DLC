//
PlayerEvents.tick(event => {
    let player = event.player
    if (event.level.isClientSide()) return
    if (player.age % 5 != 0) return
    if (!player.getPersistentData().getBoolean('madlcjetpropellergai')) {
        return
    }
    player.onUpdateAbilities()
    let playerChest = getPlayerChestCavityItemMap(player)
    if (!playerChest.has('madlc:jet_propeller_gai')) {
        player.abilities.mayfly = false
        player.abilities.flying = false
        player.onUpdateAbilities()
        player.getPersistentData().putBoolean('madlcjetpropellergai', false)
    }
    else {
        player.abilities.mayfly = true
        player.onUpdateAbilities()
    }
})