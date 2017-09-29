import React, { Component } from 'react';
import FruitSalad from 'fruit-salad';
import './App.css';

const PageOne = () => (
<div>
	Page: One
</div>
);

const PageTwo = () => (
<div>
	Page: Two
</div>
);

const PageThree = () => (
<div>
	Page: Three
</div>
);

const PageFallback = () => (
<div>
	Page: Not Found
</div>
);

class App extends Component {
render() {
  return (
    <div>
    	Hello World!
    	<FruitSalad routes={[
    			{ page: 'one', jsx: <PageOne /> },
    			{ page: 'two', jsx: <PageTwo /> },
    			{ page: 'three', jsx: <PageThree /> },
    		]}
        fallback={<PageFallback />}>
    		{({Link, page, jsx}) => (
    			<div>
    				<header>
    					Header:
    					{console.log('re-render', {Link, page, jsx})}
    					<Link page={'one'}>One</Link>
    					<Link page={'two'}>Two</Link>
    					<Link page={'three'}>Three</Link>
    					<Link page={'null'}>Broken link</Link>
    				</header>
    				{jsx}
    			</div>
    		)}
    	</FruitSalad>
    </div>
    );
  }
}

export default App;
