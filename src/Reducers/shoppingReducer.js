
import { TYPES} from "../actions/shoppingAction";

export const shoppingInitialState = {

    Medicinas: [
        {
            id: 1,
            NombreEmpresa: "Bayern",
            NombreMedicina: "Paracetamol",
            NombreCompuesto: "Toban",
            PrecioUnitario: "13",
            PrecioCaja: "13",

        },
        {
            id: 2,
            NombreEmpresa: "Bayern",
            NombreMedicina: "Paracetamol",
            NombreCompuesto: "alivia",
            PrecioUnitario: "13",
            PrecioCaja: "13",

        },
        {
            id: 3,
            NombreEmpresa: "Bayern",
            NombreMedicina: "BISMUTOL",
            NombreCompuesto: "LLAVE",
            PrecioUnitario: "13",
            PrecioCaja: "13",

        },
        {
          id: 4,
          NombreEmpresa: "Bayern",
          NombreMedicina: "dsad",
          NombreCompuesto: "sadsa",
          PrecioUnitario: "13",
          PrecioCaja: "13",

      },
      {
        id: 5,
        NombreEmpresa: "Bayern",
        NombreMedicina: "dsad",
        NombreCompuesto: "sadasd",
        PrecioUnitario: "13",
        PrecioCaja: "13",

    },
    {
      id: 3,
      NombreEmpresa: "Bayern",
      NombreMedicina: "DSAD",
      NombreCompuesto: "DASD",
      PrecioUnitario: "13",
      PrecioCaja: "13",

  }
    ],
    cart: [],
}


export function shoppingReducer(state, action) {

 

    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.Medicinas.find(
                (product) => product.id === action.payload
              );
              console.log(newItem);//ACA TRAEMPS EL PRODUCTO LOS NOMBRE ELEMENTOS 
        
              let itemInCart = state.cart.find((item) => item.id === newItem.id);//find es buscar o encontrar
        
              return itemInCart ? {
                    ...state,
                    cart: state.cart.map((item) =>
                      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 }
                        : item
                    ),
                  }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }],
                  };
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find((item) => item.id === action.payload);

            return itemToDelete.quantity > 1
              ? {
                  ...state,
                  cart: state.cart.map((item) =>
                    item.id === action.payload
                      ? { ...item, quantity: item.quantity - 1 }
                      : item
                  ),
                }
              : {
                  ...state,
                  cart: state.cart.filter((item) => item.id !== action.payload),
                };
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
              };
        }
        case TYPES.CLEAR_CART: {
            return shoppingInitialState;
        }
        default:
            return state;
    }

}

