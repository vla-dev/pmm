import Banner from "../components/Banner";

const Home = () => {
    return <>
        <Banner label="Home" />
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <p className="text-lg">1. Setup database</p>

             <span className="text-slate-500">Create a SQL database and run:</span>

            <pre className="text-slate-400 text-sm whitespace-pre-wrap my-2 p-4 bg-slate-800 rounded-md">
                CREATE TABLE `comments` (
                `id` int NOT NULL AUTO_INCREMENT,
                `name` varchar(255) NOT NULL,
                `email` varchar(255) NOT NULL,
                `body` text NOT NULL,
                `lastUpdated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (`id`)
                )
            </pre>

            <p className="text-lg mt-4">2. Config the backend to consume the db</p>
            <span className="text-slate-500">From root directory, open and edit config.php file:</span>

            <pre className="text-slate-400 text-sm whitespace-pre-wrap my-2 p-4 bg-slate-800 rounded-md">
                <p>return [</p>
                    <p> 'database' =&gt; [</p>
                    <p>     'host' =&gt; 'localhost',</p>
                    <p>     'port' =&gt; 3306,</p>
                    <p>     'dbname' =&gt; '&lt;db-name&gt;',</p>
                    <p>     'user' =&gt; '&lt;db-name&gt;',</p>
                    <p>     'password' =&gt; '',</p>
                    <p>     'charset' =&gt; 'utf8'</p>
                    <p> ]</p>
                <p>];</p>
            </pre>

            <p className="text-lg mt-4">3. Start the php server</p>
            <span className="text-slate-500">From root directory run:</span>
            <pre className="text-slate-400 text-sm whitespace-pre-wrap my-2 p-4 bg-slate-800 rounded-md">
                <p>php -S localhost:8888 -t public</p>
            </pre>

            <p className="text-lg mt-4">4. Start client</p>
            <span className="text-slate-500">Go to client directory and run the start command (keep in mind the client use a proxy to forward the request to localhost:8888, that means the php server must run at port 8888):</span>
            <pre className="text-slate-400 text-sm whitespace-pre-wrap my-2 p-4 bg-slate-800 rounded-md">
                <p>cd /client</p>
                <p>npm i</p>
                <p>npm run dev</p>
            </pre>

            <p className="text-lg mt-4">5. Go to Comments tab and enjoy 😊</p>
        </div>
    </>
}

export default Home;