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

//资源点库
const incomplete = 'create:incomplete_precision_mechanism'
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
})