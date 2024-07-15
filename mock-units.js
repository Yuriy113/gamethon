const UNITS = {
    realmName: 'test-day1-5',
    player: {
      gold: 10,
      points: 0,
      name: 'CoDevTeam',
      zombieKills: 0,
      enemyBlockKills: 0,
      gameEndedAt: null,
    },
    base: [
      {
        id: '0190a7fa-0c67-7576-88d2-4734dc8c4651',
        x: 160,
        y: 117,
        health: 88,
        attack: 10,
        range: 5,
        lastAttack: null,
      },
      {
        id: '0190a7fa-0c67-7571-965c-365daeb899f0',
        x: 159,
        y: 117,
        health: 88,
        attack: 10,
        range: 5,
        lastAttack: null,
      },
      {
        id: '0190a7fa-0c67-7564-a6f7-af468f15ac37',
        x: 159,
        y: 116,
        health: 294,
        attack: 40,
        range: 8,
        isHead: true,
        lastAttack: null,
      },
      {
        id: '0190a7fa-0c67-756b-bedb-f0f5dba1e63c',
        x: 160,
        y: 116,
        health: 94,
        attack: 10,
        range: 5,
        lastAttack: null,
      },
      {
        id: '0190a7fa-0c67-756b-bedb-f0f5dba1e6',
        x: 160,
        y: 118,
        health: 94,
        attack: 10,
        range: 5,
        lastAttack: null,
      },
    ],
    zombies: [
      // {
      //   x: 161,
      //   y: 118,
      //   id: '0d22bb8e-7c5d-471b-9ba1-96073a028b1a',
      //   type: 'fast',
      //   health: 10,
      //   attack: 6,
      //   speed: 2,
      //   waitTurns: 1,
      //   direction: 'left',
      // },
      // {
      //   x: 160,
      //   y: 123,
      //   id: 'f7dc5f85-4b9f-49a0-b441-721b8dc6a8fa',
      //   type: 'juggernaut',
      //   health: 10,
      //   attack: 999999,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'right',
      // },
      // {
      //   x: 149,
      //   y: 110,
      //   id: 'd8c1cff9-68b0-4e48-9f08-ea6306ccda11',
      //   type: 'normal',
      //   health: 10,
      //   attack: 6,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'right',
      // },
      // {
      //   x: 149,
      //   y: 106,
      //   id: '41ec4df9-e4b8-4a91-b1c3-abf09ea2a383',
      //   type: 'normal',
      //   health: 10,
      //   attack: 6,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'right',
      // },
      // {
      //   x: 149,
      //   y: 123,
      //   id: '72b0a4f6-db49-40de-9ef1-d5cc98b59f5c',
      //   type: 'fast',
      //   health: 10,
      //   attack: 6,
      //   speed: 2,
      //   waitTurns: 1,
      //   direction: 'left',
      // },
      // {
      //   x: 156,
      //   y: 111,
      //   id: '4dd35a7c-2371-44ff-8004-af7e2dc95e10',
      //   type: 'juggernaut',
      //   health: 10,
      //   attack: 999999,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'left',
      // },
      // {
      //   x: 159,
      //   y: 122,
      //   id: 'd030d9b9-ea71-41d0-bb64-f07df13956ad',
      //   type: 'chaos_knight',
      //   health: 10,
      //   attack: 6,
      //   speed: 3,
      //   waitTurns: 1,
      //   direction: 'down',
      // },
      // {
      //   x: 154,
      //   y: 124,
      //   id: '74069b61-7900-4d53-93f8-1b0aba5ca650',
      //   type: 'juggernaut',
      //   health: 10,
      //   attack: 999999,
      //   speed: 1,
      //   waitTurns: 2,
      //   direction: 'left',
      // },
      // {
      //   x: 153,
      //   y: 123,
      //   id: 'a9809553-4054-4b20-9ec5-990505cca990',
      //   type: 'fast',
      //   health: 10,
      //   attack: 6,
      //   speed: 2,
      //   waitTurns: 1,
      //   direction: 'right',
      // },
      // {
      //   x: 153,
      //   y: 123,
      //   id: '45d4213c-1b4a-4a7e-b959-947a32dd0b14',
      //   type: 'liner',
      //   health: 10,
      //   attack: 6,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'right',
      // },
      // {
      //   x: 163,
      //   y: 109,
      //   id: '29651ff7-f004-44f7-8e03-bfd2d5a05e7b',
      //   type: 'fast',
      //   health: 10,
      //   attack: 6,
      //   speed: 2,
      //   waitTurns: 1,
      //   direction: 'right',
      // },
      // {
      //   x: 152,
      //   y: 123,
      //   id: '5d2bd79a-4799-419d-9d39-37610fa49bbc',
      //   type: 'juggernaut',
      //   health: 10,
      //   attack: 999999,
      //   speed: 1,
      //   waitTurns: 2,
      //   direction: 'right',
      // },
      // {
      //   x: 150,
      //   y: 126,
      //   id: '4e1ae15a-0cc0-4ea9-a414-2d229c5c56d9',
      //   type: 'normal',
      //   health: 10,
      //   attack: 6,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'right',
      // },
      // {
      //   x: 154,
      //   y: 122,
      //   id: '2dca8612-6807-4f7a-be57-83e5a6daa8a4',
      //   type: 'bomber',
      //   health: 10,
      //   attack: 6,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'right',
      // },
      // {
      //   x: 155,
      //   y: 123,
      //   id: '17d63d2e-43b2-45a3-83d8-3d4ce0dfde20',
      //   type: 'normal',
      //   health: 10,
      //   attack: 6,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'right',
      // },
      // {
      //   x: 149,
      //   y: 107,
      //   id: '5b0e20a6-6f29-45fd-be08-91cd647cb6d8',
      //   type: 'liner',
      //   health: 10,
      //   attack: 6,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'right',
      // },
      // {
      //   x: 153,
      //   y: 126,
      //   id: '603b44c5-fcfa-45f3-92ee-94071e86a592',
      //   type: 'liner',
      //   health: 10,
      //   attack: 6,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'right',
      // },
      // {
      //   x: 155,
      //   y: 119,
      //   id: 'aa3c7ed8-3059-4553-a5d6-5de5cffdbe18',
      //   type: 'chaos_knight',
      //   health: 10,
      //   attack: 6,
      //   speed: 3,
      //   waitTurns: 1,
      //   direction: 'left',
      // },
      // {
      //   x: 151,
      //   y: 117,
      //   id: '897ef9aa-aee7-42d2-94fb-195a7410aab0',
      //   type: 'normal',
      //   health: 10,
      //   attack: 6,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'right',
      // },
      // {
      //   x: 161,
      //   y: 110,
      //   id: 'dc7588e9-320f-40fb-8e39-4692db910efe',
      //   type: 'juggernaut',
      //   health: 10,
      //   attack: 999999,
      //   speed: 1,
      //   waitTurns: 2,
      //   direction: 'right',
      // },
      // {
      //   x: 156,
      //   y: 124,
      //   id: 'c06a2618-bf87-4465-acae-95583247335e',
      //   type: 'normal',
      //   health: 10,
      //   attack: 6,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'left',
      // },
      // {
      //   x: 155,
      //   y: 126,
      //   id: 'db365c3c-34a2-4f91-a472-53c267afb43d',
      //   type: 'chaos_knight',
      //   health: 9,
      //   attack: 6,
      //   speed: 3,
      //   waitTurns: 1,
      //   direction: 'left',
      // },
      // {
      //   x: 157,
      //   y: 126,
      //   id: '670aedc4-cd61-46a0-92fb-88fd7f7ca56e',
      //   type: 'liner',
      //   health: 10,
      //   attack: 6,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'right',
      // },
      // {
      //   x: 149,
      //   y: 125,
      //   id: 'a1216708-516e-4ff7-809f-86de02f8e285',
      //   type: 'liner',
      //   health: 10,
      //   attack: 6,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'left',
      // },
      // {
      //   x: 149,
      //   y: 112,
      //   id: 'b9507dda-f8a6-4b01-a141-37111cb19446',
      //   type: 'liner',
      //   health: 10,
      //   attack: 6,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'left',
      // },
      // {
      //   x: 151,
      //   y: 125,
      //   id: 'aaa844c9-1539-4410-a64d-387360980689',
      //   type: 'juggernaut',
      //   health: 10,
      //   attack: 999999,
      //   speed: 1,
      //   waitTurns: 2,
      //   direction: 'left',
      // },
      // {
      //   x: 160,
      //   y: 114,
      //   id: 'e364b66f-5aff-484c-98a2-8f18ad52ac97',
      //   type: 'normal',
      //   health: 10,
      //   attack: 6,
      //   speed: 1,
      //   waitTurns: 1,
      //   direction: 'right',
      // },
      // {
      //   x: 153,
      //   y: 125,
      //   id: 'd2a4b9ff-12ad-493d-8458-503943a1413c',
      //   type: 'fast',
      //   health: 10,
      //   attack: 6,
      //   speed: 2,
      //   waitTurns: 1,
      //   direction: 'right',
      // },
    ],
    enemyBlocks: [
      // {
      //   x: 167,
      //   y: 124,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 116,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 110,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 127,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 113,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 111,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 122,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 160,
      //   y: 118,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 126,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 111,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 122,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 109,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 107,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 119,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 124,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 118,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 121,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 127,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 114,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 115,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 123,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: {
      //     x: 161,
      //     y: 123,
      //   },
      // },
      // {
      //   x: 167,
      //   y: 117,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 108,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 108,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 113,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 121,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 118,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 112,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 160,
      //   y: 121,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 113,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 123,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 109,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 122,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 119,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 106,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 116,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 109,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 126,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 122,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 127,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 113,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: {
      //     x: 175,
      //     y: 113,
      //   },
      // },
      // {
      //   x: 168,
      //   y: 121,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 116,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 117,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 120,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 127,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 106,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 124,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 126,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 116,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 112,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 108,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 108,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 106,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 119,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 117,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 123,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 108,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 123,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 112,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 116,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 109,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 106,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 125,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 110,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 125,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 119,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 120,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 118,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 112,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 125,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 114,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 121,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: {
      //     x: 161,
      //     y: 121,
      //   },
      // },
      // {
      //   x: 170,
      //   y: 124,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 110,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 126,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 115,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 114,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: {
      //     x: 175,
      //     y: 114,
      //   },
      // },
      // {
      //   x: 170,
      //   y: 117,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 118,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 109,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 124,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 115,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 111,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 115,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 117,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 118,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 113,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 119,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 115,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 107,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 127,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 120,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 112,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 111,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 114,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 107,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: {
      //     x: 161,
      //     y: 107,
      //   },
      // },
      // {
      //   x: 170,
      //   y: 111,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 110,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 126,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 125,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 167,
      //   y: 107,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 170,
      //   y: 106,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 121,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 123,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 107,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 166,
      //   y: 122,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 168,
      //   y: 120,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      // {
      //   x: 169,
      //   y: 125,
      //   health: 100,
      //   attack: 10,
      //   lastAttack: null,
      // },
      {
        x: 161,
        y: 118,
        health: 100,
        attack: 10,
        lastAttack: null,
      },
    ],
    turnEndsInMs: 890,
    turn: 85,
  }


  module.exports = UNITS;