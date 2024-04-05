import { Theme } from './../context/ThemeConext';

export function changeCssRootVariables(theme: Theme ) {
  const root = document.querySelector(':root') as HTMLElement;

  const components = [
    `body-background`,
    `border-background`,
    `components-background`,
    `card-background`,
    `card-shadow`,
    `text-color`,
    `dop-color-text`
  ]

  components.forEach(component => {
    root.style.setProperty(
      `--${component}-default`, 
      `var(--${component}-${theme})`
      );
  });
}