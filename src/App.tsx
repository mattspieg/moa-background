import Scene from './components/Scene';




export default function App() {

  if ((window as any).customColors === undefined) {
    console.log('used fallback color arr of ["#656AFB", "#E60000","#12C0E7","#564D88"]');
    (window as any).customColors=["#656AFB", "#E60000","#12C0E7","#564D88"]
  }

  return <Scene />;
}
