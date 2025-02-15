<h1>Design Patterns</h1>

<h2>1. Strategy Pattern</h2>
<p><b>Definition:</b> Should be <b>separated each content into function</b> so that it's easy to maintain as well as scalable. Allows changing the algorithm without affecting other functions.</p>
<ul>
    <li><b>Software application:</b> Sale store</li>
    <li><b>Practical application:</b> Go Rome</li>
</ul>

<h2>2. Observer Pattern</h2>
<p><b>Definition:</b> Works as a signal transmitting and receiving system. It separates into two parts:</p>
<ul>
    <li><b>Observer (specific part)</b></li>
    <li><b>Subject (common part)</b></li>
</ul>
<p>When one <b>Observer</b> sends a signal to the <b>Subject</b>, the <b>Subject</b> receives, handles it, and then sends the signal to other Observers.</p>
<ul>
    <li><b>Software application:</b> LOL Game, Dota 2</li>
    <li><b>Practical application:</b> Group messenger</li>
</ul>

<h2>3. Facade Pattern</h2>
<p><b>Definition:</b> Provides a simple interface to <b>hide</b> the complexity of an underlying system.</p>
<ul>
    <li><b>Software application:</b> Shop Shipping</li>
    <li><b>Practical application:</b> UI application</li>
</ul>

<h2>4. Proxy Pattern</h2>
<p><b>Definition:</b> Provides an <b>middle layer</b> that controls <b>handle the problem</b> between other object </p>
<ul>
    <li><b>Software application:</b> Middleware </li>
    <li><b>Practical application:</b> Deal salary</li>
</ul>

<h2>5. Simple Factory Pattern</h2>
<p><b>Definition:</b> Separate <b>object creation logic</b> (constructor) from the main code </p>
<ul>
    <li><b>Software application:</b> Class Constructor </li>
    <li><b>Practical application:</b> Logistic</li>
</ul>


<h2>6. Factory Method Pattern</h2>
<p><b>Definition:</b> Provides <b>an interface or class</b>, which subclass<b> depends</b> on it. This mean<b> through</b> subclass <b>change</b> property or method of father class will make <b>return  desired subclass</b></p>
<ul>
    <li><b>Software application:</b> Class Constructor </li>
    <li><b>Practical application:</b> Logistic</li>
</ul>

<h2>7. Singleton Pattern</h2>
<p><b>Definition:</b>  Ensures a class has <b>only one instance</b> and provides <b>a global access point</b> to that instance</p>
<ul>
    <li><b>Software application:</b> Load Balance (Round-Robin) </li>
</ul>

<h2>8. Prototype Pattern</h2>
<p><b>Definition:</b>  Allows create <b>clone</b> of one objects from existing instance(class) <b>instead of</b> create new ones</p>
 <p>If you wants to build macro, don't change, choose 
</p>
<ul>
    <li><b>Software application:</b> Clone champion game</li>
    <li><b>Practical application:</b>Clone house</li>
</ul>

<h2>9. Builder Pattern</h2>
<p><b>Definition:</b>  Allow create complex object <b>step by step</b> instead of passing too many para into a constructor </p>
 It separates into two parts:</p>
<ul>
    <li><b>Builder:</b> A class with withX() methods to set properties step by step</li>
    <li><b>Product: </b>Constructor reference property to builder</li>
</ul>
<p>If you wants to build micro, easy scale choose 
</p>
<ul>
    <li><b>Software application:</b> Clone champion game</li>
    <li><b>Practical application:</b> Build interior</li>
</ul>

<h2>10. Adapter Pattern</h2>
<p><b>Definition:</b> Allow <b>two incompatible system</b> to work <b>together</b> by <b>converted the interface</b> of one class into an interface that desired system</p>
 <b>Main components:</b>
 <ul>
    <li><b>Target:</b>The interface that desired system </li>
    <li><b>Adaptee: </b>Class <b>not match</b> Target interface</li>
    <li><b>Adapter: </b>A bridge that converts the Adaptee to fit the Target (written name as "Target+Adapter")</li>
</ul>
<b>Example:</b>
<ul>
    <li><b>Software application:</b>Backend B to Backend A</li>
    <li><b>Practical application:</b>Momo to Visa</li>
</ul>
