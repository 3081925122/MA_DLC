ServerEvents.entityLootTables(event =>{
    //僵尸之心掉落
    event.modifyEntity("minecraft:zombie",Loot=>{
        //额外增加掉落物，不影响原本掉落物
       Loot.addPool(pool =>{
        //掉落僵尸之心占比为2
         pool.addItem('madlc:zombie_heart').weight(2)
        //空气占比98
         pool.addEmpty(98)
       })
    }),
    //魂火掉落
    event.modifyEntity("minecraft:skeleton",Loot=>{
       Loot.addPool(pool =>{
         pool.addItem('madlc:soul_fire').weight(2)
         pool.addEmpty(98)
       })
    })
    //黄金之爱—僵尸猪灵
    event.modifyEntity("minecraft:zombified_piglin",Loot=>{
        Loot.addPool(pool =>{
          pool.addItem('madlc:golden_love1').weight(2)
          pool.addEmpty(98)
        })
     })
     //黄金之爱—猪灵
    event.modifyEntity("minecraft:piglin",Loot=>{
        Loot.addPool(pool =>{
          pool.addItem('madlc:golden_love2').weight(2)
          pool.addEmpty(98)
        })
     })
     //黄金之爱—猪灵蛮兵
    event.modifyEntity("minecraft:piglin_brute",Loot=>{
        Loot.addPool(pool =>{
          pool.addItem('madlc:golden_love3').weight(1)
          pool.addEmpty(9)
        })
     })
    //古老的不死图腾
    event.modifyEntity("minecraft:evoker",Loot=>{
        Loot.addPool(pool =>{
          pool.addItem('madlc:totem_of_undying1').weight(1)
          pool.addEmpty(9)
        })
     })
     //灾厄之魂——卫道士
    event.modifyEntity("minecraft:vindicator",Loot=>{
      Loot.addPool(pool =>{
        pool.addItem('madlc:soul_disaster').weight(1)
        pool.addEmpty(9)
      })
   })




}
)