import {Layout} from '@controls/Theme';
import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import {Dimensions, EventSubscription} from 'react-native';

type DimensionsProps = {
  width: number;
  height: number;
};

type DimensionsContextProps = {
  Window: DimensionsProps;
  Screen: DimensionsProps;
  type: 'portrait' | 'landscape';
};
const DimensionsContext = createContext<DimensionsContextProps>({
  Window: {width: Layout.Window.width, height: Layout.Window.height},
  Screen: {width: Layout.Screen.width, height: Layout.Screen.width},
  type: 'portrait',
});

const useDimensions = () => useContext(DimensionsContext);

const DimensionsProvider = ({children}: {children: ReactNode}): JSX.Element => {
  const [dimensions, setDimensions] = useState<DimensionsContextProps>({
    Window: {width: Layout.Window.width, height: Layout.Window.height},
    Screen: {width: Layout.Screen.width, height: Layout.Screen.width},
    type: 'portrait',
  });

  useEffect(() => {
    const updateDimensions = ({
      window,
      screen,
    }: {
      window: DimensionsProps;
      screen: DimensionsProps;
    }) => {
      const type = window.width < window.height ? 'portrait' : 'landscape';
      setDimensions({
        Window: {width: window.width, height: window.height},
        Screen: {width: screen.width, height: screen.height},
        type,
      });
    };

    const subscription: EventSubscription = Dimensions.addEventListener(
      'change',
      updateDimensions,
    );
    return () => subscription.remove();
  }, []);

  return (
    <DimensionsContext.Provider value={dimensions}>
      {children}
    </DimensionsContext.Provider>
  );
};

export {DimensionsProvider, useDimensions};
