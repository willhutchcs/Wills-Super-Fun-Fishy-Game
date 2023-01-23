gdjs.Post_45Game2Code = {};
gdjs.Post_45Game2Code.GDbackgroundObjects1= [];
gdjs.Post_45Game2Code.GDbackgroundObjects2= [];
gdjs.Post_45Game2Code.GDPostGameTextObjects1= [];
gdjs.Post_45Game2Code.GDPostGameTextObjects2= [];
gdjs.Post_45Game2Code.GDPlayBGObjects1= [];
gdjs.Post_45Game2Code.GDPlayBGObjects2= [];
gdjs.Post_45Game2Code.GDPlayBG2Objects1= [];
gdjs.Post_45Game2Code.GDPlayBG2Objects2= [];
gdjs.Post_45Game2Code.GDNewGameTextObjects1= [];
gdjs.Post_45Game2Code.GDNewGameTextObjects2= [];
gdjs.Post_45Game2Code.GDMainMenuTextObjects1= [];
gdjs.Post_45Game2Code.GDMainMenuTextObjects2= [];
gdjs.Post_45Game2Code.GDSliderObjects1= [];
gdjs.Post_45Game2Code.GDSliderObjects2= [];

gdjs.Post_45Game2Code.conditionTrue_0 = {val:false};
gdjs.Post_45Game2Code.condition0IsTrue_0 = {val:false};
gdjs.Post_45Game2Code.condition1IsTrue_0 = {val:false};
gdjs.Post_45Game2Code.condition2IsTrue_0 = {val:false};
gdjs.Post_45Game2Code.conditionTrue_1 = {val:false};
gdjs.Post_45Game2Code.condition0IsTrue_1 = {val:false};
gdjs.Post_45Game2Code.condition1IsTrue_1 = {val:false};
gdjs.Post_45Game2Code.condition2IsTrue_1 = {val:false};


gdjs.Post_45Game2Code.eventsList0 = function(runtimeScene) {

};gdjs.Post_45Game2Code.mapOfGDgdjs_46Post_9545Game2Code_46GDPlayBGObjects1Objects = Hashtable.newFrom({"PlayBG": gdjs.Post_45Game2Code.GDPlayBGObjects1});
gdjs.Post_45Game2Code.mapOfGDgdjs_46Post_9545Game2Code_46GDPlayBG2Objects1Objects = Hashtable.newFrom({"PlayBG2": gdjs.Post_45Game2Code.GDPlayBG2Objects1});
gdjs.Post_45Game2Code.eventsList1 = function(runtimeScene) {

{


gdjs.Post_45Game2Code.condition0IsTrue_0.val = false;
gdjs.Post_45Game2Code.condition1IsTrue_0.val = false;
{
gdjs.Post_45Game2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Post_45Game2Code.condition0IsTrue_0.val ) {
{
gdjs.Post_45Game2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3));
}}
if (gdjs.Post_45Game2Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(Math.round(Math.ceil(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)))));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("PostGameText"), gdjs.Post_45Game2Code.GDPostGameTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slider"), gdjs.Post_45Game2Code.GDSliderObjects1);
{for(var i = 0, len = gdjs.Post_45Game2Code.GDPostGameTextObjects1.length ;i < len;++i) {
    gdjs.Post_45Game2Code.GDPostGameTextObjects1[i].setString("Good work!" + gdjs.evtTools.string.newLine() + "You scored: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.Post_45Game2Code.GDSliderObjects1.length ;i < len;++i) {
    gdjs.Post_45Game2Code.GDSliderObjects1[i].play();
}
}}

}


{


gdjs.Post_45Game2Code.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("PlayBG"), gdjs.Post_45Game2Code.GDPlayBGObjects1);

gdjs.Post_45Game2Code.condition0IsTrue_0.val = false;
{
{gdjs.Post_45Game2Code.conditionTrue_1 = gdjs.Post_45Game2Code.condition0IsTrue_0;
gdjs.Post_45Game2Code.condition0IsTrue_1.val = false;
gdjs.Post_45Game2Code.condition1IsTrue_1.val = false;
{
gdjs.Post_45Game2Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Post_45Game2Code.mapOfGDgdjs_46Post_9545Game2Code_46GDPlayBGObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Post_45Game2Code.condition0IsTrue_1.val ) {
{
gdjs.Post_45Game2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.Post_45Game2Code.conditionTrue_1.val = true && gdjs.Post_45Game2Code.condition0IsTrue_1.val && gdjs.Post_45Game2Code.condition1IsTrue_1.val;
}
}if (gdjs.Post_45Game2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayBG2"), gdjs.Post_45Game2Code.GDPlayBG2Objects1);

gdjs.Post_45Game2Code.condition0IsTrue_0.val = false;
{
{gdjs.Post_45Game2Code.conditionTrue_1 = gdjs.Post_45Game2Code.condition0IsTrue_0;
gdjs.Post_45Game2Code.condition0IsTrue_1.val = false;
gdjs.Post_45Game2Code.condition1IsTrue_1.val = false;
{
gdjs.Post_45Game2Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Post_45Game2Code.mapOfGDgdjs_46Post_9545Game2Code_46GDPlayBG2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Post_45Game2Code.condition0IsTrue_1.val ) {
{
gdjs.Post_45Game2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.Post_45Game2Code.conditionTrue_1.val = true && gdjs.Post_45Game2Code.condition0IsTrue_1.val && gdjs.Post_45Game2Code.condition1IsTrue_1.val;
}
}if (gdjs.Post_45Game2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Post_45Game2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Post_45Game2Code.GDbackgroundObjects1.length = 0;
gdjs.Post_45Game2Code.GDbackgroundObjects2.length = 0;
gdjs.Post_45Game2Code.GDPostGameTextObjects1.length = 0;
gdjs.Post_45Game2Code.GDPostGameTextObjects2.length = 0;
gdjs.Post_45Game2Code.GDPlayBGObjects1.length = 0;
gdjs.Post_45Game2Code.GDPlayBGObjects2.length = 0;
gdjs.Post_45Game2Code.GDPlayBG2Objects1.length = 0;
gdjs.Post_45Game2Code.GDPlayBG2Objects2.length = 0;
gdjs.Post_45Game2Code.GDNewGameTextObjects1.length = 0;
gdjs.Post_45Game2Code.GDNewGameTextObjects2.length = 0;
gdjs.Post_45Game2Code.GDMainMenuTextObjects1.length = 0;
gdjs.Post_45Game2Code.GDMainMenuTextObjects2.length = 0;
gdjs.Post_45Game2Code.GDSliderObjects1.length = 0;
gdjs.Post_45Game2Code.GDSliderObjects2.length = 0;

gdjs.Post_45Game2Code.eventsList1(runtimeScene);

return;

}

gdjs['Post_45Game2Code'] = gdjs.Post_45Game2Code;
