
import { InMemoryDbService } from 'angular-in-memory-web-api';



export class InMemDataService implements InMemoryDbService {



  createDb() {

    // let ldapConnection = [
    //   {
    //     "GESMAG": {
    //       "listGroupAD": [
    //         {
    //           "group": "GROUP1",
    //           "members": [
    //             "personne 1",
    //             "personne 2",
    //             "personne 3"
    //           ]
    //         },
    //         {
    //           "group": "GROUP2",
    //           "members": [
    //             "personne 1",
    //             "personne 2",
    //             "personne 3"
    //           ]
    //         }
    //       ]
    //     }
    //   },
    //   {
    //     "GESPA": {
    //       "listGroupAD": [
    //         {
    //           "group": "GROUP1",
    //           "members": [
    //             "personne 1",
    //             "personne 2",
    //             "personne 3"
    //           ]
    //         },
    //         {
    //           "group": "GROUP2",
    //           "members": [
    //             "personne 1",
    //             "personne 2",
    //             "personne 3"
    //           ]
    //         }
    //       ]
    //     }
    //   }, {
    //     "ONDEMAND": {
    //       "listGroupAD": [
    //         {
    //           "group": "GROUP1",
    //           "members": [
    //             "personne 1",
    //             "personne 2",
    //             "personne 3"
    //           ]
    //         },
    //         {
    //           "group": "GROUP2",
    //           "members": [
    //             "personne 1",
    //             "personne 2",
    //             "personne 3"
    //           ]
    //         }
    //       ]
    //     }
    //   },
    //   {
    //     "VISUALFLUX": {
    //       "listGroupAD": [
    //         {
    //           "group": "GROUP1",
    //           "members": [
    //             "personne 1",
    //             "personne 2",
    //             "personne 3"
    //           ]
    //         },
    //         {
    //           "group": "GROUP2",
    //           "members": [
    //             "personne 1",
    //             "personne 2",
    //             "personne 3"
    //           ]
    //         }
    //       ]
    //     }
    //   },
    //   {
    //     "WEBEDI": {
    //       "listGroupAD": [
    //         {
    //           "group": "GROUP1",
    //           "members": [
    //             "personne 1",
    //             "personne 2",
    //             "personne 3"
    //           ]
    //         },
    //         {
    //           "group": "GROUP2",
    //           "members": [
    //             "personne 1",
    //             "personne 2",
    //             "personne 3"
    //           ]
    //         }
    //       ]
    //     }
    //   }
    // ];
    
    
    // EDT Infos
  
    let devInfosData = [
      {data: 'test Dev'}
    ];

    let devMcoInfosData = [
      {data: 'test Dev MCO'}
    ];
    let intInfosData = [
      {data: 'test Int'}
    ];
    let intMcoInfosData = [
      {data: 'test Int MCO'}
    ];
    let recRitInfosData = [
      {data: 'test REC (RIT)'}
    ];
    let recCurInfosData = [
      {data: 'test REC (CUR)'}
    ];
    let homVsiInfosData = [
      {data: 'test HOM (VSI)'}
    ];
    let homMigInfosData = [
      {data: 'test HOM (MIG)'}
    ];
    let preprodInfosData = [
      {data: 'test PREPROD'}
    ];
    let benchInfosData = [
      {data: 'test BENCH'}
    ];
    let prodInfosData = [
      {data: 'test PROD'}
    ];

    // EDT BDOC
    let devBdocData = [
      {data: 'Bdoc Dev'}
    ];
    let devMcoBdocData = [
      {data: 'Bdoc Dev MCO'}
    ];
    let intBdocData = [
      {data: 'Bdoc Int'}
    ];
    let intMcoBdocData = [
      {data: 'Bdoc Int MCO'}
    ];
    let recRitBdocData = [
      {data: 'Bdoc REC (RIT)'}
    ];
    let recCurBdocData = [
      {data: 'Bdoc REC (CUR)'}
    ];
    let homVsiBdocData = [
      {data: 'Bdoc HOM (VSI)'}
    ];
    let homMigBdocData = [
      {data: 'Bdoc HOM (MIG)'}
    ];
    let preprodBdocData = [
      {data: 'Bdoc PREPROD'}
    ];
    let benchBdocData = [
      {data: 'Bdoc BENCH'}
    ];
    let prodBdocData = [
      {data: 'Bdoc PROD'}
    ];

    // EDT Disk
    let devDiskData = [{data: 
          {
          dataUse: {dataUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          homeUse : {homeUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          sefasUse : {sefasUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)}
        }
      }];
    let devMcoDiskData = [{data: 
          {
          dataUse: {dataUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          homeUse : {homeUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          sefasUse : {sefasUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)}
        }
      }];
    let intDiskData = [{data: 
          {
          dataUse: {dataUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          homeUse : {homeUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          sefasUse : {sefasUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)}
        }
      }];
    let intMcoDiskData = [{data: 
          {
          dataUse: {dataUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          homeUse : {homeUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          sefasUse : {sefasUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)}
        }
      }];
    let recRitDiskData = [{data: 
          {
          dataUse: {dataUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          homeUse : {homeUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          sefasUse : {sefasUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)}
        }
      }];
    let recCurDiskData = [{data: 
          {
          dataUse: {dataUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          homeUse : {homeUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          sefasUse : {sefasUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)}
        }
      }];
    let homVsiDiskData = [{data: 
          {
          dataUse: {dataUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          homeUse : {homeUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          sefasUse : {sefasUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)}
        }
      }];
    let homMigDiskData = [{data: 
          {
          dataUse: {dataUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          homeUse : {homeUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          sefasUse : {sefasUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)}
        }
      }];
    let preprodDiskData = [{data: 
          {
          dataUse: {dataUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          homeUse : {homeUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          sefasUse : {sefasUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)}
        }
      }];
    let benchDiskData = [{data: 
          {
          dataUse: {dataUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          homeUse : {homeUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          sefasUse : {sefasUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)}
        }
      }];
    let prodDiskData = [{data: 
          {
          dataUse: {dataUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          homeUse : {homeUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)},
          sefasUse : {sefasUsed : (1 + Math.floor(Math.random() * (100 - 1 + 1)) + 1), spaceLeft : (1 + Math.floor(Math.random() * (600 - 1 + 1)) + 1), maxSpace : (601 + Math.floor(Math.random() * (1000 - 601 + 1)) + 601)}
        }
      }];

    return {devInfosData, devMcoInfosData, intInfosData, intMcoInfosData, recRitInfosData, recCurInfosData,
            homVsiInfosData, homMigInfosData, preprodInfosData, benchInfosData, prodInfosData,
            devBdocData, devMcoBdocData, intBdocData, intMcoBdocData, recRitBdocData, recCurBdocData,
            homVsiBdocData, homMigBdocData, preprodBdocData, benchBdocData, prodBdocData, devDiskData,
            devMcoDiskData, intDiskData, intMcoDiskData, recRitDiskData, recCurDiskData, homVsiDiskData,
            homMigDiskData, preprodDiskData, benchDiskData, prodDiskData
          };
  }
}