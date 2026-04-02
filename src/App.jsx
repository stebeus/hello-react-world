import { Egg } from './components/Egg.jsx';
import { Greeting } from './components/Greeting.jsx';
import { HtmlElementConvertedToJsx } from './components/HtmlElementConvertedToJsx.jsx';
import { PersonForm } from './components/PersonForm.jsx';

export function App() {
  return (
    <>
      <h1>Hello, React World!</h1>
      <Greeting />
      <Egg />
      <HtmlElementConvertedToJsx />
      <PersonForm />
    </>
  );
}
