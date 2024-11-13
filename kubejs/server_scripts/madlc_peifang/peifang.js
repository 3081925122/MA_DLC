//原版合成台配方
ServerEvents.recipes(event => {
    //压缩氧气植入物
    event.shaped('kubejs:compressed_oxygen_implant',[
         ['madlc:posundeyasuoyangqizhiruwu','minecraft:iron_ingot','madlc:posundeyasuoyangqizhiruwu'],
         [],
         []
     ]);
    //简陋红石熔炉
     event.shaped('madlc:primitive_redstone_furnace',[
        ['minecraft:iron_ingot','minecraft:redstone_block','minecraft:iron_ingot'],
        ['minecraft:redstone_block','minecraft:furnace','minecraft:redstone_block'],
        ['minecraft:iron_ingot','minecraft:redstone_block','minecraft:iron_ingot']
     ]);
    // 增幅装置
    event.shaped('madlc:amplification_device',[
        ['minecraft:iron_ingot','minecraft:diamond','minecraft:iron_ingot'],
        ['minecraft:iron_ingot','minecraft:redstone','minecraft:iron_ingot'],
        ['minecraft:iron_ingot','minecraft:iron_ingot','minecraft:iron_ingot']
     ]);
     // 玻璃容器
    event.shaped('madlc:glass_jar',[
        [,'minecraft:glass',],
        ['minecraft:glass',,'minecraft:glass'],
        ['minecraft:glass','minecraft:glass','minecraft:glass']
     ]);
    //精细机械手
    event.shaped('madlc:precision_manipulator',[
        ['create:precision_mechanism','create:deployer','create:precision_mechanism'],
        ['createaddition:gold_wire','kubejs:silk_for_cutting','createaddition:gold_wire'],
        ['createaddition:gold_wire','createaddition:gold_wire','createaddition:gold_wire']
    ]);
    //机械发条（改）
    event.shaped('madlc:jixiefatiaogai',[
        ['kubejs:machine_clockwork','',''],
        [],
        []
    ]);
    //变速齿轮（改）
    event.shaped('madlc:gearbox_gai',[
        [],
        ['create:cogwheel','madlc:gearbox1','create:large_cogwheel'],
        []
    ]);
    //变速齿轮（一档）
    event.shaped('madlc:gearbox1',[
        ['','create:large_cogwheel',''],
        ['create:andesite_alloy','create:rotation_speed_controller','create:andesite_alloy'],
        ['create:cogwheel','create:cogwheel','create:cogwheel']
    ])

    //变速齿轮（二档）
    event.shaped('madlc:gearbox2',[
        ['','create:large_cogwheel',''],
        ['create:brass_ingot','madlc:gearbox1','create:brass_ingot'],
        ['minecraft:diamond','create:cogwheel','minecraft:diamond']
    ])

    //变速齿轮（三档）
    event.shaped('madlc:gearbox3',[
        ['','create:large_cogwheel',''],
        ['create:precision_mechanism','madlc:gearbox2','create:precision_mechanism'],
        ['art_of_forging:forged_steel_ingot','create:cogwheel','art_of_forging:forged_steel_ingot']
    ])

    //喷气推进器（升级改良）
    event.shaped('madlc:jet_propeller_gai',[
        ['cataclysm:ignitium_ingot','minecraft:phantom_membrane','cataclysm:ignitium_ingot'],
        ['irons_spellbooks:dragonskin','nameless_trinkets:ethereal_wings','irons_spellbooks:dragonskin'],
        ['minecraft:phantom_membrane','kubejs:jet_propeller','minecraft:phantom_membrane']
    ])
    //高级冰龙心脏
    event.shaped('madlc:ice_dragon_heart1',[
        ['iceandfire:ice_dragon_blood','iceandfire:ice_dragon_blood','iceandfire:ice_dragon_blood'],
        ['iceandfire:ice_dragon_blood','iceandfire:ice_dragon_heart','iceandfire:ice_dragon_blood'],
        ['iceandfire:ice_dragon_blood','iceandfire:ice_dragon_blood','iceandfire:ice_dragon_blood']
    ])
    //高级火龙心脏
    event.shaped('madlc:fire_dragon_heart1',[
        ['iceandfire:fire_dragon_blood','iceandfire:fire_dragon_blood','iceandfire:fire_dragon_blood'],
        ['iceandfire:fire_dragon_blood','iceandfire:fire_dragon_heart','iceandfire:fire_dragon_blood'],
        ['iceandfire:fire_dragon_blood','iceandfire:fire_dragon_blood','iceandfire:fire_dragon_blood']
    ])
    //高级雷龙心脏
    event.shaped('madlc:lightning_dragon_heart1',[
        ['iceandfire:lightning_dragon_blood','iceandfire:lightning_dragon_blood','iceandfire:lightning_dragon_blood'],
        ['iceandfire:lightning_dragon_blood','iceandfire:lightning_dragon_heart','iceandfire:lightning_dragon_blood'],
        ['iceandfire:lightning_dragon_blood','iceandfire:lightning_dragon_blood','iceandfire:lightning_dragon_blood']
    ])

//召唤祭坛配方

    //中枢芯片
    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('madlc:ritual_cpu1')
        .input('goety:totem_of_roots')
        .input('kubejs:redstone_chipset')
        .input('madlc:xinpian')
        .itemOutput('madlc:cpu1')
        .sacrifice('minecraft:villager', 1)
        .sacrificeRegion(3, 3)
        .dayTime('night')
        .recipeTime(500);

    //灵魂芯片
    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('madlc:soul_chip')
        .input('alexsmobs:soul_heart')
        .input('art_of_forging:enigmatic_construct')
        .input('bosses_of_mass_destruction:ancient_anima')
        .input('madlc:cpu1')
        .input('goety:arca')
        .itemOutput('madlc:soul_chip')
        .sacrifice('minecraft:villager', 1)
        .sacrificeRegion(3, 3)
        .dayTime('night')
        .recipeTime(500);

    //龙袭珍珠
    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('madlc:dragon_attack')
        .input('iceandfire:dragon_skull_fire')
        .input('iceandfire:dragon_skull_ice')
        .input('iceandfire:dragon_skull_lightning')
        .input('16x iceandfire:fire_dragon_flesh')
        .input('16x iceandfire:ice_dragon_flesh')
        .input('16x iceandfire:lightning_dragon_flesh')
        .input('32x iceandfire:dragonbone')
        .itemOutput(Item.of('gateways:gate_pearl', '{gateway:"madlc:dragon_attack"}'))
        .recipeTime(500);
});

//机械融合砧
ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registerCustomRecipe(new WeaponInfusionRecipe(Item.of('madlc:amplification_device'), Item.of('goety:reinforced_redstone_block'),Item.of('madlc:amplification_device_redstone')))
    registerCustomRecipe(new WeaponInfusionRecipe(Item.of('madlc:amplification_device'), Item.of('create:mechanical_saw'),Item.of('madlc:amplification_device_cutting')))
})