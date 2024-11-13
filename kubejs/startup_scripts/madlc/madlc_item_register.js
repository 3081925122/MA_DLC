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
    //测试
    registerOrgan(new Organ('madlc:ceshi')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.ceshi"})])
    .addScore('health',5)
    .addScore('nerves', 5)
    .addScore('breath_recovery', 5)
    .addScore('strength', 5)
    .addScore('filtration', 5)
    .addScore('detoxification', 5)
    .addScore('defense', 5)
    .addScore('nutrition', 5)
    .addScore('endurance', 1)
    .addScore('digestion', 5)
    .addScore('metabolism',5)
    .addScore('breath_capacity', 1)
    .addScore('speed', 5)
    .build())
    .tag('kubejs:damage_only')
    .tag('kubejs:bear_only');

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
    .tag('kubejs:resource')
    .tag('kubejs:bear_only')
    .tag('kubejs:rib');

    //机械肋骨（左）
    registerOrgan(new Organ('madlc:mechanical_ribs_zuo')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.mechanical_ribs_zuo.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.mechanical_ribs_zuo.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.mechanical_ribs_zuo.3"})])
    .addScore('defense',2)
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:bear_only')
    .tag('kubejs:active_only')
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
     .tag('kubejs:resource')
     .tag('kubejs:bear_only')
     .tag('kubejs:rib');
 
     //机械肋骨（右）
    registerOrgan(new Organ('madlc:mechanical_ribs_yuo')
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.mechanical_ribs_yuo.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.mechanical_ribs_yuo.2"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.mechanical_ribs_yuo.3"})])
    .addScore('defense',2)
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:bear_only')
    .tag('kubejs:active_only')
    .tag('kubejs:rib');

    //机械胃
    registerOrgan(new Organ('madlc:jixiewei')
    .addTextLines('default',[Text.gray({"translate":"jixiewei"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiewei.1"})])
    .addScore('digestion', 2)
    .addScore('nutrition', 1.2)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:stomach')
    .tag('kubejs:player_tick_only')

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
    registerOrgan(new Organ('madlc:cpu1')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.cpu1.1"})])
    .addTextLines('alt',[Text.gray({"translate":"madlc.tooltips.cpu1.2"})])
    .addTextLines('ctrl',[Text.gray({"translate":"madlc.tooltips.cpu1.3"})])
    .addTextLines('ctrl',[Text.gray({"translate":"madlc.tooltips.cpu1.4"})])
    .addTextLines('ctrl',[Text.gray({"translate":"madlc.tooltips.cpu1.5"})])
    .addScore('health',-0.5)
    .addScore('nerves', 0.75)
    .addScore('breath_recovery', 1)
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
    .tag('kubejs:resource')
    .tag('kubejs:active_only')

    //灵魂芯片
    registerOrgan(new Organ('madlc:soul_chip')
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.soul_chip.1"})])
    .addTextLines('alt',[Text.gray({"translate":"madlc.tooltips.soul_chip.2"})])
    .addTextLines('ctrl',[Text.gray({"translate":"madlc.tooltips.soul_chip.3"})])
    .addTextLines('ctrl',[Text.gray({"translate":"madlc.tooltips.soul_chip.4"})])
    .addTextLines('ctrl',[Text.gray({"translate":"madlc.tooltips.soul_chip.5"})])
    .addTextLines('alt',[Text.gray({"translate":"madlc.tooltips.soul_chip.6"})])
    .addScore('health',3)
    .addScore('nerves', 3)
    .addScore('breath_recovery', 3)
    .addScore('strength', 3)
    .addScore('filtration', 3)
    .addScore('detoxification', 3)
    .addScore('defense', 3)
    .addScore('nutrition', 3)
    .addScore('endurance', 3)
    .addScore('digestion', 3)
    .addScore('metabolism', 3)
    .addScore('breath_capacity', 3)
    .addScore('speed', 3)
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:active_only')
    
    //机械发条（改）
    registerOrgan(new Organ('madlc:jixiefatiaogai')
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.jixiefatiaogai.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefatiaogai.2"})])
    .addScore('health',-0.25)
    .addScore('speed',0.25)
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:player_tick')
    .tag('kubejs:resource')
    .tag('kubejs:machine')
    .tag('itemborders:gold');

    //简陋红石熔炉
    registerOrgan(new Organ('madlc:primitive_redstone_furnace')
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addScore('health', 0.25)
    .addScore('defense', -0.5)
    .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "madlc.tooltips.primitive_redstone_furnace.2" })])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.primitive_redstone_furnace.3"})])
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:heart')
    .tag('kubejs:resource')
    .tag('kubejs:rclick_only');

    //烈焰熔炉
    registerOrgan(new Organ('madlc:flaming_furnace')
    .addScore('health', 0.5)
    .addScore('defense', -1.5)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "madlc.tooltips.flaming_furnace.2" })])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.flaming_furnace.1"})])
    .addTextLines('ctrl',[Text.gray({"translate":"madlc.tooltips.flaming_furnace.3"})])
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:heart')
    .tag('kubejs:active')
    .tag('kubejs:resource')
    .tag('kubejs:rclick_only');

    //夜视仪
    registerOrgan(new Organ('madlc:night_vision_device')
    .addScore('nerves',-0.25)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.night_vision_device.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.night_vision_device.2"})])
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:resource')
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
    .tag('itemborders:iron')
    .tag('kubejs:machine');

    //变速齿轮（三档）
    registerOrgan(new Organ('madlc:gearbox3')
    .addScore('speed',32)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.gearbox3.1"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:machine');

    //变速齿轮（改）
    registerOrgan(new Organ('madlc:gearbox_gai')
    .addScore('speed',2)
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.gearbox_gai.1"})])
    .addTextLines('alt',[Text.gray({"translate":"madlc.tooltips.gearbox_gai.2"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:machine')
    .tag('kubejs:player_tick_only');

    //资源点库
    registerOrgan(new Organ('madlc:energy_storage')
    .addScore('strength',1)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.energy_storage.1"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.energy_storage.2"})])
    .build())
    .tag('kubejs:machine')
    .tag('kubejs:active')
    .tag('kubejs:resource')

    //喷气推进器（升级改良）
    registerOrgan(new Organ('madlc:jet_propeller_gai')
    .addScore('speed',2)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.jet_propeller_gai.1"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jet_propeller_gai.2"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:active')

    //魔力转化器 
     registerOrgan(new Organ('madlc:magic_monverter')
    .addScore('speed',-1)
    .addScore('nerves', 1)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
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
    .tag('kubejs:resource')
    .tag('kubejs:active_only')
    .tag('kubejs:player_tick_only');

    //微型心火核心
    registerOrgan(new Organ('madlc:small_burning_heart')
    .addScore('health',0.5)
    .addScore('speed',0.75)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.small_burning_heart.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.small_burning_heart.2"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:player_tick_only');

    //后备隐藏能源
     registerOrgan(new Organ('madlc:hidden_reserve_energy')
    .addScore('explosive',3)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.hidden_reserve_energy.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.hidden_reserve_energy.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.hidden_reserve_energy.3"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.hidden_reserve_energy.4"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:active_only')
    .tag('kubejs:key_pressed');

    //多功能机械臂
    registerOrgan(new Organ('madlc:multi_functional_robotic_arm')
    .addScore('strength',1.5)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.multi_functional_robotic_arm"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine')
    .tag('kubejs:active_only');

    //动力臂
    registerOrgan(new Organ('madlc:steam_powered_mechanical_arm')
    .addScore('strength',2)
    .addScore('health',-0.25)
    .addScore('speed',1)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.steam_powered_mechanical_arm.1"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.steam_powered_mechanical_arm.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.steam_powered_mechanical_arm.3"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.steam_powered_mechanical_arm.4"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:active')
    .tag('kubejs:player_tick')
    .tag('kubejs:muscle');

    //纳米修复昆虫
    registerOrgan(new Organ('madlc:nanorepair_insect')
    .addScore('iron_repair', 5)
    .addScore('metabolism',1)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.nanorepair_insect.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.nanorepair_insect.2"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:player_tick_only');

    //精细机械手
    registerOrgan(new Organ('madlc:precision_manipulator')
    .addScore('strength', 2)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.precision_manipulator.1"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:machine')
    .tag('kubejs:break_only');

    //基础增幅装置
    registerOrgan(new Organ('madlc:amplification_device')
    .addScore('health',1)
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:machine');

    //增幅装置——红石
    registerOrgan(new Organ('madlc:amplification_device_redstone')
    .addScore('health',2)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.amplification_device_redstone.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.amplification_device_redstone.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.amplification_device_redstone.3"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.amplification_device_redstone.4"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:resource')
    .tag('kubejs:damage_only')
    .tag('kubejs:machine');

    //增幅装置——切割
    registerOrgan(new Organ('madlc:amplification_device_cutting')
    .addScore('health',2)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.amplification_device_cutting.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.amplification_device_cutting.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.amplification_device_cutting.3"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.amplification_device_cutting.4"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:resource')
    .tag('kubejs:damage_only')
    .tag('kubejs:machine');

    //钢铁外壳
    registerOrgan(new Organ('madlc:steel_shell')
    .addScore('defense',3)
    .addScore('iron_repair', 3)
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.steel_shell.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.steel_shell.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.steel_shell.3"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.steel_shell.4"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.steel_shell.5"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:rclick_only')
    .tag('kubejs:bear_only')
    .tag('kubejs:machine');

    //食物鱼缸
    registerOrgan(new Organ('madlc:fish_in_food')
    .addScore('nutrition', 2)
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.fish_in_food.0"})])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.fish_in_food.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.fish_in_food.2"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:food');

    //玻璃容器
    registerOrgan(new Organ('madlc:glass_jar')
    .build())

    //采集锤 
    registerOrgan(new Organ('madlc:chain_collection_hammer')
    .addScore('strength', 2)
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.chain_collection_hammer.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.chain_collection_hammer.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.chain_collection_hammer.3"})])
    .build())
    .tag('kubejs:break_only')
    .tag('itemborders:gold')
    .tag('kubejs:machine');

    //净化装置
    registerOrgan(new Organ('madlc:cleaning_device')
    .addScore('detoxification', 8)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.cleaning_device.1"})])
    .build())
    .tag('kubejs:player_tick_only')
    .tag('itemborders:gold')
    .tag('kubejs:machine');

    //机械盾牌
    registerOrgan(new Organ('madlc:mechanical_shield')
    .addScore('defense', 3)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.mechanical_shield.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.mechanical_shield.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.mechanical_shield.3"})])
    .build())
    .tag('kubejs:bear_only')
    .tag('itemborders:gold')
    .tag('kubejs:resource')
    .tag('kubejs:machine');

    //高级电龙心脏
    registerOrgan(new Organ('madlc:lightning_dragon_heart1')
    .addScore('health', 5)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.lightning_dragon_heart1.2"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.lightning_dragon_heart1.3"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.long"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:damage_only')
    .tag('kubejs:active_only')
    .tag('kubejs:dragon');

    //高级火龙心脏
    registerOrgan(new Organ('madlc:fire_dragon_heart1')
    .addScore('health', 5)
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.fire_dragon_heart1.2"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.fire_dragon_heart1.3"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.long"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:active_only')
    .tag('kubejs:dragon');

    //高级冰龙心脏
    registerOrgan(new Organ('madlc:ice_dragon_heart1')
    .addScore('health', 5)
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.ice_dragon_heart1.2"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.ice_dragon_heart1.3"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.long"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:active_only')
    .tag('kubejs:dragon');

    //可充能式不死图腾
    registerOrgan(new Organ('madlc:charged_totem_of_undying')
    .addScore('health', 3)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.charged_totem_of_undying.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.charged_totem_of_undying.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.charged_totem_of_undying.3"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.charged_totem_of_undying.4"})])
    .build())
    .tag('itemborders:gold')
    .tag('kubejs:bear_only')
    .tag('kubejs:active_only')
    .tag('kubejs:resource')
    .tag('kubejs:machine');

    //工具箱
    registerOrgan(new Organ('madlc:toolbox')
    .addScore('speed', -1)
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.toolbox.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.toolbox.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.toolbox.3"})])
    .build())
    .tag('kubejs:player_tick_only')
    .tag('kubejs:resource')
    .tag('kubejs:machine');

    //玫瑰脊柱
    registerOrgan(new Organ('madlc:rose_quartz_spine')
    .addScore('nerves', 2)
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.rose_quartz_spine.1"})])
    .build())
    .tag('kubejs:active')
    .tag('kubejs:rose');

    //微型分解工厂
    registerOrgan(new Organ('madlc:micro_processing_factory')
    .addScore('speed', -2)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.micro_processing_factory.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.micro_processing_factory.2"})])
    .build())
    .tag('kubejs:loot_entity_only')
    .tag('kubejs:damage_only')
    .tag('kubejs:resource')
    .tag('kubejs:machine');

    //龙炎动力臂
    registerOrgan(new Organ('madlc:fire_steam_powered_mechanical_arm')
    .addScore('strength',4)
    .addScore('health',-0.5)
    .addScore('speed',2)
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.fire_steam_powered_mechanical_arm.1"})])
    .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.fire_steam_powered_mechanical_arm.2"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.fire_steam_powered_mechanical_arm.3"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.fire_steam_powered_mechanical_arm.4"})])
    .build())
    .tag('itemborders:iron')
    .tag('kubejs:machine')
    .tag('kubejs:resource')
    .tag('kubejs:active_only')
    .tag('kubejs:player_tick')
    .tag('kubejs:muscle');

     //凋零动力臂
     registerOrgan(new Organ('madlc:storm_steam_powered_mechanical_arm')
     .addScore('strength',8)
     .addScore('health',-2)
     .addScore('speed',3)
     .addScore('withered', 5)
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.jixiefeisheng"})])
     .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.storm_steam_powered_mechanical_arm.1"})])
     .addTextLines('ctrl',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.storm_steam_powered_mechanical_arm.2"})])
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.storm_steam_powered_mechanical_arm.3"})])
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.storm_steam_powered_mechanical_arm.4"})])
     .build())
     .tag('itemborders:iron')
     .tag('kubejs:machine')
     .tag('kubejs:resource')
     .tag('kubejs:active_only')
     .tag('kubejs:player_tick')
     .tag('kubejs:muscle');

     //僵尸之心
     registerOrgan(new Organ('madlc:zombie_heart')
     .addScore('health', 0.5)
     .addScore('fire_resistant', -3)
     .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.zombie_heart.1"})])
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.zombie_heart.2"})])
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.zombie_heart.3"})])
     .build())
     .tag('kubejs:bear_only')
     .tag('kubejs:player_tick_only');

     //魂火
     registerOrgan(new Organ('madlc:soul_fire')
     .addScore('strength', 1.5)
     .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.soul_fire.1"})])
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.soul_fire.2"})])
     .build())
     .tag('kubejs:damage_only');

     //黄金之爱——僵尸猪灵
     registerOrgan(new Organ('madlc:golden_love1')
     .addScore('strength', 1.5)
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.golden_love1.1"})])
     .build())
     .tag('kubejs:bear_only');

     //黄金之爱——猪灵
     registerOrgan(new Organ('madlc:golden_love2')
     .addScore('strength', 1.5)
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.golden_love2.1"})])
     .build())
     .tag('kubejs:player_tick_only');

     //黄金之爱——蛮兵
     registerOrgan(new Organ('madlc:golden_love3')
     .addScore('strength', 1.5)
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.golden_love3.1"})])
     .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.golden_love3.2"})])
     .build())
     .tag('kubejs:damage_only');

     //金色书龙鳞片
     /*
    registerOrgan(new Organ('madlc:book_wyrm_scale1')
    .addScore('defense',1)
    .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "madlc.tooltips.book_wyrm_scale1.1" })])
    .build())
    .tag('kubejs:key_pressed');*/

    //古老的不死图腾
    registerOrgan(new Organ('madlc:totem_of_undying1')
    .addScore('health', 1.5)
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.totem_of_undying1.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.totem_of_undying1.2"})])
    .build())
    .tag('kubejs:bear_only');

    //灾厄之魂——卫道士
    registerOrgan(new Organ('madlc:soul_disaster')
    .addScore('strength', 1.5)
    .addTextLines('default',[Text.gray({"translate":"madlc.tooltips.soul_disaster.1"})])
    .addTextLines('alt',[LEADING_SYMBOL,Text.gray({"translate":"madlc.tooltips.soul_disaster.2"})])
    .build())
    .tag('kubejs:damage_only');
})