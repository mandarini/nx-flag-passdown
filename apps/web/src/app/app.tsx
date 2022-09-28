// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Ui } from '@flag-issue/ui';

export function App() {
  return (
    <>
      <NxWelcome title="web" />
      <Ui />
      <div />
    </>
  );
}

export default App;
