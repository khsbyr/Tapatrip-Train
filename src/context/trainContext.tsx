import React, { FC, useCallback, useMemo } from 'react';

export interface State {
  startStationID: string;
  endStationID: string;
  startStationName: string;
  endStationName: string;
  selectedSeats: any;
  isSelectedSeats: any;
  selectedVoyageData: any;
  loading: boolean;
  loadingOrder: any;
  orderId: any;
}

const initialState = {
  startStationID: '',
  endStationID: '',
  startStationName: '',
  endStationName: '',
  selectedSeats: '',
  isSelectedSeats: '',
  selectedVoyageData: '',
  loading: false,
  loadingOrder: '',
  orderId: undefined,
};

type Action =
  | {
      type: 'SET_START_STATION_ID';
      value: string;
    }
  | {
      type: 'SET_END_STATION_ID';
      value: string;
    }
  | {
      type: 'SET_START_STATION_NAME';
      value: string;
    }
  | {
      type: 'SET_END_STATION_NAME';
      value: string;
    }
  | {
      type: 'SET_SELECTED_SEATS';
      value: any;
    }
  | {
      type: 'SET_IS_SELECTED_SEATS';
      value: any;
    }
  | {
      type: 'SET_SELECTED_VOYAGE_DATA';
      value: any;
    }
  | {
      type: 'SET_LOADING';
      value: boolean;
    }
  | {
      type: 'SET_LOADING_ORDER';
      value: any;
    }
  | {
      type: 'SET_ORDER_ID';
      value: any;
    };

export const GlobalContext = React.createContext<State | any>(initialState);

GlobalContext.displayName = 'GlobalContext';

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_START_STATION_ID': {
      return {
        ...state,
        startStationID: action.value,
      };
    }
    case 'SET_END_STATION_ID': {
      return {
        ...state,
        endStationID: action.value,
      };
    }

    case 'SET_START_STATION_NAME': {
      return {
        ...state,
        startStationName: action.value,
      };
    }

    case 'SET_END_STATION_NAME': {
      return {
        ...state,
        endStationName: action.value,
      };
    }

    case 'SET_SELECTED_SEATS': {
      return {
        ...state,
        selectedSeats: action.value,
      };
    }

    case 'SET_IS_SELECTED_SEATS': {
      return {
        ...state,
        isSelectedSeats: action.value,
      };
    }

    case 'SET_SELECTED_VOYAGE_DATA': {
      return {
        ...state,
        selectedVoyageData: action.value,
      };
    }

    case 'SET_LOADING': {
      return {
        ...state,
        loading: action.value,
      };
    }

    case 'SET_LOADING_ORDER': {
      return {
        ...state,
        loadingOrder: action.value,
      };
    }

    case 'SET_ORDER_ID': {
      return {
        ...state,
        orderId: action.value,
      };
    }
  }
}

export const GlobalProvider: FC = props => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const setStartStationID = useCallback(
    (value: string) => dispatch({ type: 'SET_START_STATION_ID', value }),
    [dispatch]
  );

  const setEndStationID = useCallback(
    (value: string) => dispatch({ type: 'SET_END_STATION_ID', value }),
    [dispatch]
  );

  const setStartStationName = useCallback(
    (value: string) => dispatch({ type: 'SET_START_STATION_NAME', value }),
    [dispatch]
  );

  const setEndStationName = useCallback(
    (value: string) => dispatch({ type: 'SET_END_STATION_NAME', value }),
    [dispatch]
  );

  const setSelectedSeats = useCallback(
    (value: any) => dispatch({ type: 'SET_SELECTED_SEATS', value }),
    [dispatch]
  );

  const setIsSelectedSeats = useCallback(
    (value: any) => dispatch({ type: 'SET_IS_SELECTED_SEATS', value }),
    [dispatch]
  );

  const setSelectedVoyageData = useCallback(
    (value: any) => dispatch({ type: 'SET_SELECTED_VOYAGE_DATA', value }),
    [dispatch]
  );

  const setLoading = useCallback(
    (value: any) => dispatch({ type: 'SET_LOADING', value }),
    [dispatch]
  );

  const setLoadingOrder = useCallback(
    (value: any) => dispatch({ type: 'SET_LOADING_ORDER', value }),
    [dispatch]
  );

  const setOrderId = useCallback(
    (value: any) => dispatch({ type: 'SET_ORDER_ID', value }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      setStartStationID,
      setEndStationID,
      setStartStationName,
      setEndStationName,
      setSelectedSeats,
      setIsSelectedSeats,
      setSelectedVoyageData,
      setLoading,
      setLoadingOrder,
      setOrderId,
    }),
    [state]
  );

  return <GlobalContext.Provider value={value} {...props} />;
};

export const useTrainContext = () => {
  const context = React.useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(`useGlobalStore must be used within a GlobalProvider`);
  }
  return context;
};

export const ManagedTrainContext: FC = ({ children }) => (
  <GlobalProvider>{children}</GlobalProvider>
);
