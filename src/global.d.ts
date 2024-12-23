declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}  

declare namespace JSX {
    interface IntrinsicElements {
      checkbox: React.DetailedHTMLProps<React.HTMLProps<HTMLElement>, HTMLElement>;
    }
  }
  