ServerEvents.recipes(event => {
    //压缩氧气植入物
    event.shaped('kubejs:compressed_oxygen_implant',[
         ['madlc:posundeyasuoyangqizhiruwu','minecraft:iron_ingot','madlc:posundeyasuoyangqizhiruwu'],
         [],
         []
     ]);
    //简陋红石熔炉
     event.shaped('madlc:primitive_redstone_furnace',[
        ['minecraft:iron_ingot','64x minecraft:redstone_block','minecraft:iron_ingot'],
        ['64x minecraft:redstone_block','minecraft:furnace','64x minecraft:redstone_block'],
        ['minecraft:iron_ingot','64x minecraft:redstone_block','minecraft:iron_ingot']
     ]);

    //机械发条
    event.shaped('madlc:jixiefatiaogai',[
        ['kubejs:machine_clockwork','',''],
        [],
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

    //中枢芯片
    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('madlc:ritual_cpu')
        .input(Item.of('goety:totem_of_roots'))
        .input('kubejs:redstone_chipset')
        .input('madlc:xinpian')
        .itemOutput('madlc:cpu')
        .sacrifice('minecraft:villager', 1)
        .sacrificeRegion(3, 3)
        .dayTime('night')
        .recipeTime(500);

    //喷气推进器（升级改良）
    event.shaped('madlc:jet_propeller_gai',[
        ['cataclysm:ignitium_ingot','minecraft:phantom_membrane','cataclysm:ignitium_ingot'],
        ['irons_spellbooks:dragonskin','nameless_trinkets:ethereal_wings','irons_spellbooks:dragonskin'],
        ['minecraft:phantom_membrane','kubejs:jet_propeller','minecraft:phantom_membrane']
    ]

    )
});