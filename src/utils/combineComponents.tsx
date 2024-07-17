import { FC, ReactNode } from 'react';

type Component = FC<{ children: ReactNode }>;

export default function CombinedComponents(
  components: Component[],
): FC<{ children: ReactNode }> {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      const Combined: FC<{ children: ReactNode }> = ({ children }) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
      return Combined;
    },
    ({ children }) => <>{children}</>,
  );
}
