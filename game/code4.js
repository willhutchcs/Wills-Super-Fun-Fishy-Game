gdjs.Post_45GameCode = {};
gdjs.Post_45GameCode.GDbackgroundObjects1= [];
gdjs.Post_45GameCode.GDbackgroundObjects2= [];
gdjs.Post_45GameCode.GDPostGameTextObjects1= [];
gdjs.Post_45GameCode.GDPostGameTextObjects2= [];
gdjs.Post_45GameCode.GDPlayBGObjects1= [];
gdjs.Post_45GameCode.GDPlayBGObjects2= [];
gdjs.Post_45GameCode.GDPlayBG2Objects1= [];
gdjs.Post_45GameCode.GDPlayBG2Objects2= [];
gdjs.Post_45GameCode.GDNewGameTextObjects1= [];
gdjs.Post_45GameCode.GDNewGameTextObjects2= [];
gdjs.Post_45GameCode.GDMainMenuTextObjects1= [];
gdjs.Post_45GameCode.GDMainMenuTextObjects2= [];
gdjs.Post_45GameCode.GDSliderObjects1= [];
gdjs.Post_45GameCode.GDSliderObjects2= [];

gdjs.Post_45GameCode.conditionTrue_0 = {val:false};
gdjs.Post_45GameCode.condition0IsTrue_0 = {val:false};
gdjs.Post_45GameCode.condition1IsTrue_0 = {val:false};
gdjs.Post_45GameCode.condition2IsTrue_0 = {val:false};
gdjs.Post_45GameCode.conditionTrue_1 = {val:false};
gdjs.Post_45GameCode.condition0IsTrue_1 = {val:false};
gdjs.Post_45GameCode.condition1IsTrue_1 = {val:false};
gdjs.Post_45GameCode.condition2IsTrue_1 = {val:false};


gdjs.Post_45GameCode.eventsList0 = function(runtimeScene) {

};gdjs.Post_45GameCode.mapOfGDgdjs_46Post_9545GameCode_46GDPlayBGObjects1Objects = Hashtable.newFrom({"PlayBG": gdjs.Post_45GameCode.GDPlayBGObjects1});
gdjs.Post_45GameCode.mapOfGDgdjs_46Post_9545GameCode_46GDPlayBG2Objects1Objects = Hashtable.newFrom({"PlayBG2": gdjs.Post_45GameCode.GDPlayBG2Objects1});
gdjs.Post_45GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.Post_45GameCode.condition0IsTrue_0.val = false;
{
gdjs.Post_45GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Post_45GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PostGameText"), gdjs.Post_45GameCode.GDPostGameTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slider"), gdjs.Post_45GameCode.GDSliderObjects1);
{for(var i = 0, len = gdjs.Post_45GameCode.GDPostGameTextObjects1.length ;i < len;++i) {
    gdjs.Post_45GameCode.GDPostGameTextObjects1[i].setString("Good work!" + gdjs.evtTools.string.newLine() + "You scored: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Post_45GameCode.GDSliderObjects1.length ;i < len;++i) {
    gdjs.Post_45GameCode.GDSliderObjects1[i].play();
}
}}

}


{


gdjs.Post_45GameCode.condition0IsTrue_0.val = false;
{
gdjs.Post_45GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("highScore"));
}if (gdjs.Post_45GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


gdjs.Post_45GameCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("PlayBG"), gdjs.Post_45GameCode.GDPlayBGObjects1);

gdjs.Post_45GameCode.condition0IsTrue_0.val = false;
{
{gdjs.Post_45GameCode.conditionTrue_1 = gdjs.Post_45GameCode.condition0IsTrue_0;
gdjs.Post_45GameCode.condition0IsTrue_1.val = false;
gdjs.Post_45GameCode.condition1IsTrue_1.val = false;
{
gdjs.Post_45GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Post_45GameCode.mapOfGDgdjs_46Post_9545GameCode_46GDPlayBGObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Post_45GameCode.condition0IsTrue_1.val ) {
{
gdjs.Post_45GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.Post_45GameCode.conditionTrue_1.val = true && gdjs.Post_45GameCode.condition0IsTrue_1.val && gdjs.Post_45GameCode.condition1IsTrue_1.val;
}
}if (gdjs.Post_45GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayBG2"), gdjs.Post_45GameCode.GDPlayBG2Objects1);

gdjs.Post_45GameCode.condition0IsTrue_0.val = false;
{
{gdjs.Post_45GameCode.conditionTrue_1 = gdjs.Post_45GameCode.condition0IsTrue_0;
gdjs.Post_45GameCode.condition0IsTrue_1.val = false;
gdjs.Post_45GameCode.condition1IsTrue_1.val = false;
{
gdjs.Post_45GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Post_45GameCode.mapOfGDgdjs_46Post_9545GameCode_46GDPlayBG2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Post_45GameCode.condition0IsTrue_1.val ) {
{
gdjs.Post_45GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.Post_45GameCode.conditionTrue_1.val = true && gdjs.Post_45GameCode.condition0IsTrue_1.val && gdjs.Post_45GameCode.condition1IsTrue_1.val;
}
}if (gdjs.Post_45GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Post_45GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Post_45GameCode.GDbackgroundObjects1.length = 0;
gdjs.Post_45GameCode.GDbackgroundObjects2.length = 0;
gdjs.Post_45GameCode.GDPostGameTextObjects1.length = 0;
gdjs.Post_45GameCode.GDPostGameTextObjects2.length = 0;
gdjs.Post_45GameCode.GDPlayBGObjects1.length = 0;
gdjs.Post_45GameCode.GDPlayBGObjects2.length = 0;
gdjs.Post_45GameCode.GDPlayBG2Objects1.length = 0;
gdjs.Post_45GameCode.GDPlayBG2Objects2.length = 0;
gdjs.Post_45GameCode.GDNewGameTextObjects1.length = 0;
gdjs.Post_45GameCode.GDNewGameTextObjects2.length = 0;
gdjs.Post_45GameCode.GDMainMenuTextObjects1.length = 0;
gdjs.Post_45GameCode.GDMainMenuTextObjects2.length = 0;
gdjs.Post_45GameCode.GDSliderObjects1.length = 0;
gdjs.Post_45GameCode.GDSliderObjects2.length = 0;

gdjs.Post_45GameCode.eventsList1(runtimeScene);

return;

}

gdjs['Post_45GameCode'] = gdjs.Post_45GameCode;
