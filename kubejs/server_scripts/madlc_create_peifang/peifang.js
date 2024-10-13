ServerEvents.recipes(event =>{
  const create = event.recipes.create

//机械肌肉
create.sandpaper_polishing('madlc:jixiejirou','madlc:shengxiudejixiejirou')

//合金肋骨（左）
create.sandpaper_polishing('madlc:hejinleiguzuo','madlc:shengxiudehejinleiguzuo')

//合金肋骨（右）
create.sandpaper_polishing('madlc:hejinleiguyou','madlc:shengxiudehejinleiguyou')

//芯片
create.sandpaper_polishing('madlc:xinpian','madlc:shengxiudexinpian')

//夜视仪
create.mixing("madlc:night_vision_device",[Fluid.water(1000),'3x minecraft:nether_wart','9x minecraft:golden_carrot','create:goggles'])

const incomplete = 'create:incomplete_precision_mechanism'
//资源点库
event.recipes.create.sequenced_assembly([
    Item.of('madlc:energy_storage')
  ],'create:brass_casing',[
    create.deploying(incomplete,[incomplete,'minecraft:ender_pearl']),
    create.deploying(incomplete,[incomplete,'create:precision_mechanism']),
    create.cutting(incomplete,incomplete),
    create.pressing(incomplete,incomplete),
    create.deploying(incomplete,[incomplete,'art_of_forging:forged_steel_ingot']),
    create.deploying(incomplete,[incomplete,'createaddition:capacitor'])
   ]).transitionalItem(incomplete).loops(3)

//微型心火核心
event.recipes.create.sequenced_assembly([
    Item.of('madlc:small_burning_heart')
  ],'kubejs:burning_heart',[
    create.cutting(incomplete,incomplete),
    create.deploying(incomplete,[incomplete,'minecraft:blaze_rod']),
    create.deploying(incomplete,[incomplete,'chestcavity:blaze_shell']),
    create.deploying(incomplete,[incomplete,'bosses_of_mass_destruction:blazing_eye'])
  ]).transitionalItem(incomplete).loops(2)

//机械肋骨（左）
event.recipes.create.sequenced_assembly([
  Item.of('madlc:mechanical_ribs_zuo')
],'madlc:hejinleiguzuo',[
  create.deploying(incomplete,[incomplete,'minecraft:obsidian']),
  create.pressing(incomplete,incomplete),
  create.deploying(incomplete,[incomplete,'createaddition:diamond_grit']),
  create.pressing(incomplete,incomplete),
  create.deploying(incomplete,[incomplete,'create:sturdy_sheet']),
  create.pressing(incomplete,incomplete),
  create.deploying(incomplete,[incomplete,'minecraft:netherite_ingot']),
  create.pressing(incomplete,incomplete),
]).transitionalItem(incomplete).loops(3)

//机械肋骨（右）
event.recipes.create.sequenced_assembly([
  Item.of('madlc:mechanical_ribs_yuo')
],'madlc:hejinleiguyou',[
  create.deploying(incomplete,[incomplete,'minecraft:obsidian']),
  create.pressing(incomplete,incomplete),
  create.deploying(incomplete,[incomplete,'createaddition:diamond_grit']),
  create.pressing(incomplete,incomplete),
  create.deploying(incomplete,[incomplete,'create:sturdy_sheet']),
  create.pressing(incomplete,incomplete),
  create.deploying(incomplete,[incomplete,'minecraft:netherite_ingot']),
  create.pressing(incomplete,incomplete),
]).transitionalItem(incomplete).loops(3)

//多功能机械臂
event.recipes.create.sequenced_assembly([
  Item.of('madlc:multi_functional_robotic_arm')
],'create:extendo_grip',[
  create.cutting(incomplete,incomplete),
  create.deploying(incomplete,[incomplete,'kubejs:telescopic_attack_arm']),
  create.deploying(incomplete,[incomplete,'kubejs:telescopic_tool_arm']),
]).transitionalItem(incomplete).loops(1)

//魔力转化器
create.mechanical_crafting('madlc:magic_monverter',
  [
    'AAAAA',
    'ABCBA',
    'ADEDA',
    'AFCFA',
    'AAAAA'
  ],
  {
    A:'create:industrial_iron_block',
    B:'irons_spellbooks:arcane_ingot',
    C:'kubejs:nether_star_shard',
    D:'create:sturdy_sheet',
    E:'create:brass_casing',
    F:'create:precision_mechanism'
  }
)

//烈焰熔炉
create.mechanical_crafting('madlc:flaming_furnace',
  [
    'ABA',
    'CDC',
    'AEA'
  ],
  {
    A:'chestcavity:blaze_shell',
    B:'bosses_of_mass_destruction:charged_ender_pearl',
    C:'create:precision_mechanism',
    D:'madlc:primitive_redstone_furnace',
    E:'bosses_of_mass_destruction:blazing_eye',
  }
)
//后备隐藏能源
create.mechanical_crafting('madlc:hidden_reserve_energy',
  [
    'ABA',
    'CDC',
    'AEA'
  ],
  {
    A:'madlc:energy_storage',
    B:'minecraft:flint_and_steel',
    C:'minecraft:gunpowder',
    D:'witherstormmod:formidibomb',
    E:'bosses_of_mass_destruction:monolith_block',
  }
)
//蒸汽机械臂
create.mechanical_crafting('madlc:steam_powered_mechanical_arm',
  [
    'AAA',
    'BCB',
    'DED'
  ],
  {
    A:'create:steam_engine',
    B:'create:fluid_tank',
    C:'chestcavity:piston_muscle',
    D:'create:blaze_burner',
    E:'iceandfire:fire_dragon_heart',
  }
)
})