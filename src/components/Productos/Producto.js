const productos =[
    {id:1, title:"Sagrada Madre", description:"Sahumerios de Citronella, Naranja y Palo santo, extra duracion", price:270, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/002/052/925/products/sahumerios-palo-santo-051-5f008253e1a68c226316547242960108-640-0.jpg", cat:"Sahumerios"
    },
    {id:2, title:"Aromanza", description:"Sahumerios en polvo, fragancias extra fuertes", price:320,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiK2GMALocqrlTC64I02E-L5QqvSc5eXqVnw&usqp=CAU", cat:"Sahumerios"
    },
    {id:3, title:"Cuatro poderes", description:"Sahumerios premium, 100% naturales", price:200, img:"https://http2.mlstatic.com/D_NQ_NP_991417-MLA32871851110_112019-O.jpg", cat:"Sahumerios"
    },
    {id:4, title:"Satya", description:"Sahumerios hechos a mano en Bangaluru (capital de incienso de la India)", price:230, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/271/874/products/67b2ea79-b178-476b-b36f-e9fac4ed2a811-801e18bf3e225ca1f215870717798935-1024-1024.jpeg", cat:"Sahumerios"
    },
    {id:5, title:"Iluminarte India", description:"Sahumerios de chocolate, vainilla, coco, frutilla", price:210, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrqlTO8L0FZUqKH3xA--3GvPqwkCdt8Qr7FiIX29r_E84AJlPvOZHYtMVLwvTa6bn23A&usqp=CAU", cat:"Sahumerios"
    },
    {id:6, title:"Bangladesh", description:"", price:450, img:"https://grupoutopia.com.ar/storage/media/a361e452fc3534294edbfb5962a1f12886fb975e.jpeg", cat:"Sahumerios"
    },
    {id:7, title:"Saphirus", description:"", price:550, img:"https://scontent.flpg4-1.fna.fbcdn.net/v/t39.30808-6/300272344_737421844328295_7668039994576914690_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=IzfFUtJGVbAAX_5Oqcq&_nc_ht=scontent.flpg4-1.fna&oh=00_AT822KRzRXiev-3Km0zzGqXQq5yDvGIegfN94G8WsxD8bQ&oe=6344BC72", cat:"Aromatizantes"
    },
    {id:8, title:"Iluminarte", description:"", price:440, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMIvNeIsRJVbRsmlfOPbIyta-3iGujIRbGilPsFF13bjAUfMbcC6fjeWBD5v_1uoQS58&usqp=CAU", cat:"Aromatizantes"
    },
    {id:9, title:"Organic Spa", description:"", price:350, img:"https://http2.mlstatic.com/D_NQ_NP_866022-MLA49839325117_052022-V.jpg", cat:"Aromatizantes"
    },
    {id:10, title:"Urban Jungle", description:"", price:290, img:"https://arredo.vtexassets.com/arquivos/ids/354908-800-auto?v=637992988161800000&width=800&height=auto&aspect=true", cat:"Aromatizantes"
    },
    {id:11, title:"Iluminarte", description:"", price:320, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/022/438/products/rqewewfwe1-2b23e7e83b946f571116533997842819-1024-1024.png", cat:"Velas"
    },
    {id:12, title:"Organic Spa", description:"", price:180, img:"http://d2r9epyceweg5n.cloudfront.net/stores/001/623/122/products/image000171-cca8d0660bc094f98616331169505183-640-0.jpeg", cat:"Velas"
    },
    {id:13, title:"Kala", description:"", price:260, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/161/840/products/151-d6d48916890e48cecf16520245211392-640-0.png", cat:"Velas"
    }
    ];


    export const getProduct = (id) => {
        return new Promise((resolve) => {
            const prod = productos.find(p => p.id === parseInt(id))
            setTimeout(() => {
                resolve(prod)
            }, 1000)
        })
      }

      export default productos;