import 'antd/dist/antd.css';
import { Button } from 'antd';

function App() {
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1 style={{ padding: 20 }}>Ant Design Button Types</h1>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
}

export default App;
