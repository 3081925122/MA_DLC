StartupEvents.registry('item', event => {
    /**
     * 
     * @param {organ} organ
     * @returns {Internal.BasicItemJS$Builder}
     */
    function registerOrgan(organ) {
        global.ORGAN_LIST.push(organ)
        let builder = event.create(organ.itemID).maxStackSize(organ.maxStackSize).tag('kubejs:organ').group("kubejs.madlc")
        if (organ.ctrlTextLines.length > 0) {
            builder.tag('chestcavity:active')
        }
        if (organ.altTextLines.length > 0) {
            builder.tag('chestcavity:special')
        }
        return builder
      }

      //生锈的机械肌肉
    registerOrgan(new Organ('madlc:shengxiudejixiejirou')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.shengxiudejixiejirou"})])
    .addScore('strength',1.25)
    .addScore('speed',1.25)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:muscle');
    
    //机械肌肉
    registerOrgan(new Organ('madlc:jixiejirou')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.jixiejirou"})])
    .addScore('strength',1.5)
    .addScore('speed',1.5)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:muscle');

     //生锈的合金肋骨（左）
    registerOrgan(new Organ('madlc:shengxiudehejinleiguzuo')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.shengxiudehejinleiguzuo.1"})])
    .addScore('defense',1)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:rib');

    //合金肋骨（左）
    registerOrgan(new Organ('madlc:hejinleiguzuo')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.hejinleiguzuo.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.hejinleiguzuo.2"})])
    .addScore('defense',1.5)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:bear_only')
    .tag('kubejs:rib');


    //生锈的合金肋骨（右）
    registerOrgan(new Organ('madlc:shengxiudehejinleiguyou')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.shengxiudehejinleiguyou.1"})])
    .addScore('defense',1)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:rib');

     //合金肋骨（右）
     registerOrgan(new Organ('madlc:hejinleiguyou')
     .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.hejinleiguyou.1"})])
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.hejinleiguyou.2"})])
     .addScore('defense',1)
     .build())
     .tag('kubejs:machine')
     .tag('kubejs:bear_only')
     .tag('kubejs:rib');
 

    //机械胃
    registerOrgan(new Organ('madlc:jixiewei')
    .addTextLines('default',[Text.gray({"translate":"jixiewei"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiewei.1"})])
    .addScore('digestion', 2)
    .addScore('nutrition', 1.2)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:stomach')
    .tag('kubejs:player_tick')

    //人造脾
    registerOrgan(new Organ('madlc:renzaopi')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.renzaopi"})])
    .addScore('metabolism',1.25)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:spleen')

    //机械血泵
    registerOrgan(new Organ('madlc:jixiexuebeng')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.jixiexuebeng"})])
    .addScore('health',3)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:heart')

    //机械脊柱
    registerOrgan(new Organ('madlc:jixiejizhu')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.jixiejizhu"})])
    .addScore('nerves',1.25)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:spine')

    //肝部过滤器
    registerOrgan(new Organ('madlc:ganbuguolvqi')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.ganbuguolvqi"})])
    .addScore('detoxification',1.25)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:liver')

    //透析器
    registerOrgan(new Organ('madlc:touxiqi')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.touxiqi"})])
    .addScore('filtration',1.75)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:kidney')

     //破损的压缩氧气植入物
    registerOrgan(new Organ('madlc:posundeyasuoyangqizhiruwu')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.posundeyasuoyangqizhiruwu"})])
    .addScore('breath_recovery',1.5)
    .addScore('detoxification',-0.5)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:lung')

    //生锈的芯片
    registerOrgan(new Organ('madlc:shengxiudexinpian')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.shengxiudexinpian"})])
    .addScore('health',-0.25)
    .addScore('nerves', 0.25)
    .addScore('breath_recovery', 0.25)
    .addScore('strength', 0.25)
    .addScore('filtration', 0.25)
    .addScore('detoxification', 0.25)
    .addScore('defense', 0.125)
    .addScore('nutrition', 0.125)
    .addScore('endurance', 1)
    .addScore('digestion', 0.125)
    .addScore('metabolism', 0.125)
    .addScore('breath_capacity', 1)
    .addScore('speed', 0.25)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:active')

    //芯片
    registerOrgan(new Organ('madlc:xinpian')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.xinpian"})])
    .addScore('health',-0.5)
    .addScore('nerves', 0.5)
    .addScore('breath_recovery', 0.5)
    .addScore('strength', 0.5)
    .addScore('filtration', 0.5)
    .addScore('detoxification', 0.5)
    .addScore('defense', 2)
    .addScore('nutrition', 0.25)
    .addScore('endurance', 1.5)
    .addScore('digestion', 0.25)
    .addScore('metabolism', 0.25)
    .addScore('breath_capacity', 2)
    .addScore('speed', 0.5)
    .build())
    .tag('kubejs:machine')

    //中枢芯片
    registerOrgan(new Organ('madlc:cpu')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.cpu.1"})])
    .addTextLines('alt',[Text.gray({"translate":"madlc.tooltips.cpu.2"})])
    .addTextLines('ctrl',[Text.gray({"translate":"madlc.tooltips.cpu.3"})])
    .addTextLines('ctrl',[Text.gray({"translate":"madlc.tooltips.cpu.4"})])
    .addScore('health',-0.5)
    .addScore('nerves', 0.75)
    .addScore('breath_recovery', 0.75)
    .addScore('strength', 0.75)
    .addScore('filtration', 0.75)
    .addScore('detoxification', 0.75)
    .addScore('defense', 2.25)
    .addScore('nutrition', 0.5)
    .addScore('endurance', 1.75)
    .addScore('digestion', 0.5)
    .addScore('metabolism', 0.5)
    .addScore('breath_capacity', 2)
    .addScore('speed', 0.75)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:active_only')


    //机械发条（改）
    registerOrgan(new Organ('madlc:jixiefatiaogai')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.jixiefatiaogai.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefatiaogai.2"})])
    .addScore('health',-0.25)
    .addScore('speed',0.25)
    .build())
    .tag('kubejs:player_tick')
    .tag('kubejs:resource')
    .tag('kubejs:machine')
    .tag('itemborders:gold');

    //简陋红石熔炉
    registerOrgan(new Organ('madlc:primitive_redstone_furnace')
    .addScore('health', 0.25)
    .addScore('defense', -0.5)
    .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "madlc.tooltips.primitive_redstone_furnace.2" })])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.primitive_redstone_furnace.3"})])
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:heart')
    .tag('kubejs:resource')
    .tag('kubejs:rclick_only');

    //夜视仪
    registerOrgan(new Organ('madlc:night_vision_device')
    .addScore('nerves',-0.25)
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.night_vision_device.1"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.night_vision_device.2"})])
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:player_tick');

    //变速齿轮(一档)
    registerOrgan(new Organ('madlc:gearbox1')
    .addScore('speed',8)
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.gearbox1.1"})])
    .build())
    .tag('kubejs:machine');

    //变速齿轮(二档)
    registerOrgan(new Organ('madlc:gearbox2')
    .addScore('speed',16)
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.gearbox2.1"})])
    .build())
    .tag('kubejs:machine');

    //变速齿轮（三档）
    registerOrgan(new Organ('madlc:gearbox3')
    .addScore('speed',32)
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.gearbox3.1"})])
    .build())
    .tag('kubejs:machine');

    //资源点库
    registerOrgan(new Organ('madlc:energy_storage')
    .addScore('strength',1)
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.energy_storage.1"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.energy_storage.2"})])
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:active')
    .tag('kubejs:resource')

    //喷气推进器（升级改良）
    registerOrgan(new Organ('madlc:jet_propeller_gai')
    .addScore('speed',2)
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.jet_propeller_gai.1"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jet_propeller_gai.2"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine')
    .tag('kubejs:active')

    //魔力转化器 
     registerOrgan(new Organ('madlc:magic_monverter')
    .addScore('speed',-1)
    .addScore('nerves', 1)
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.magic_monverter.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.magic_monverter.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.magic_monverter.3"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.magic_monverter.4"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.magic_monverter.5"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.magic_monverter.6"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.magic_monverter.7"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine')
    .tag('kubejs:active_only')
    .tag('kubejs:player_tick_only');

    //微型心火核心
   /** registerOrgan(new Organ('madlc:jet_propeller_gai')
    .addScore('speed',2)
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.jet_propeller_gai.1"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jet_propeller_gai.2"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine')
    .tag('kubejs:active')
*/
})