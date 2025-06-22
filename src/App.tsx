// import ClassComponent from "./components/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import Layout from "./components/Layout.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
import CounterWithReducer from "./components/CounterWithReducer.tsx";

function App() {


    return (<>
            <Layout>


                {/*<>*/}
                {/*    <ClassComponent/>*/}
                {/*    <FunctionalComponent/>*/}
                {/*    <ArrowFunctionalComponent/>*/}
                {/*    title="Is an Arrow Functional Component With Props"*/}
                {/*    description="This is a description"*/}


                {/*</>*/}
                {/*<h1 className="text-center text-2xl font-bold">Hello World</h1>*/}
                {/*<FunctionalComponent/>*/}
                {/*<ClassComponentWithState/>*/}
                {/*<FunctionalComponentWithState/>*/}
            {/*    <Counter/>*/}
            {/*    <NameChanger/>*/}
            {/*    <CounterWithMoreStates/>*/}
            {/*    <CounterAdvanced/>*/}
            {/*    <CounterWithCustomHook/>*/}
            {/*    <CounterAdvancedWithCustomHook/>*/}
                <CounterWithReducer/>
            </Layout>

        </>
    )
}

export default App
