// NOTE: This definition file is auto generated - any changes you make will not be saved
// 2/26/2022 7:04:31 PM

declare function runOnStartup(cb: (runtime: IRuntime) => void): void;

declare interface IRuntime {
    objects: IRuntimeObjects;
    addEventListener(eventName: 'tick' | 'beforeprojectstart' | 'afterprojectstart' | 'keydown' | 'keyup'
        | 'mousedown' | 'mousemove' | 'mouseup' | 'dblclick' | 'wheel' | 'pointerdown' | 'pointermove'
        | 'pointercancel' | 'deviceorientation' | 'devicemotion' | 'save' | 'load' | 'instancecreate'
        | 'instancedestroy', callback: (...params: unknown[]) => void): void;
    removeEventListener(eventName: 'tick' | 'beforeprojectstart' | 'afterprojectstart' | 'keydown' | 'keyup'
        | 'mousedown' | 'mousemove' | 'mouseup' | 'dblclick' | 'wheel' | 'pointerdown' | 'pointermove'
        | 'pointercancel' | 'deviceorientation' | 'devicemotion' | 'save' | 'load' | 'instancecreate'
        | 'instancedestroy', callback: (...params: unknown[]) => void): void;
    dt: number;
    gameTime: number;
    getInstanceByUid(uid: any): IInstance | undefined
    globalVars: IGlobalVars;
    mouse?: IMouseObjectType;
    keyboard?: IKeyboardObjectType;
    touch?: ITouchObjectType;
    layout: ILayout;
    getLayout(layoutNameOrIndex: string | number): ILayout;
    getAllLayouts(): Array<ILayout>;
    goToLayout(layoutNameOrIndex: string | number): void;
    assets: IAssetManager;
    storage: IStorage;
    callFunction(name: string, ...params: unknown[]): unknown;
    setReturnValue(...params: unknown[]): void;
    projectName: string;
    projectionVersion: string;
    random(): number;
    wallTime: number;
    sortZOrder<T>(iterable: Array<T>, callback: (a: T, b: T) => boolean): void;
    invokeDownload(url: string, filename: string): void;
    isInWorker: boolean;
    alert(message: string): Promise<void>;
}
declare var IRuntime:  { new(): IRuntime };

type VariableType = Record<string, string | boolean | number | null | undefined>;

interface IRuntimeObjects {
	['WinRate']: IObjectClass<IWinRate>;
	['TXT_YOU_HAVE_TURNS']: IObjectClass<ITXT_YOU_HAVE_TURNS>;
	['TXT_YOU_HAVE_NO_TURN']: IObjectClass<ITXT_YOU_HAVE_NO_TURN>;
	['TXT_TURN_NUMBER']: IObjectClass<ITXT_TURN_NUMBER>;
	['TXT_TIME_LINE']: IObjectClass<ITXT_TIME_LINE>;
	['TXT_Score_Show']: IObjectClass<ITXT_Score_Show>;
	['TXT_SCORE_PANEL_HEADER']: IObjectClass<ITXT_SCORE_PANEL_HEADER>;
	['TXT_REWARD_NUMBER']: IObjectClass<ITXT_REWARD_NUMBER>;
	['TXT_REWARD']: IObjectClass<ITXT_REWARD>;
	['TXT_LIMITATION_TURN']: IObjectClass<ITXT_LIMITATION_TURN>;
	['TXT_LEVEL']: IObjectClass<ITXT_LEVEL>;
	['TXT_HOME_ALERT_NO_TURN']: IObjectClass<ITXT_HOME_ALERT_NO_TURN>;
	['TXT_HEADER_REWARD_NUMBER']: IObjectClass<ITXT_HEADER_REWARD_NUMBER>;
	['TXT_HEADER_PANEL']: IObjectClass<ITXT_HEADER_PANEL>;
	['TXT_HEADER_EXP']: IObjectClass<ITXT_HEADER_EXP>;
	['TXT_GameOver']: IObjectClass<ITXT_GameOver>;
	['TXT_EXP']: IObjectClass<ITXT_EXP>;
	['TXT_COUNT_DOWN']: IObjectClass<ITXT_COUNT_DOWN>;
	['trophy_game_over_3']: IObjectClass<Itrophy_game_over_3>;
	['trophy_game_over_2']: IObjectClass<Itrophy_game_over_2>;
	['trophy_game_over_1']: IObjectClass<Itrophy_game_over_1>;
	['Touch']: IObjectClass<ITouch>;
	['TiledBackground3']: IObjectClass<ITiledBackground3>;
	['TiledBackground2']: IObjectClass<ITiledBackground2>;
	['TiledBackground']: IObjectClass<ITiledBackground>;
	['SupperWinRate']: IObjectClass<ISupperWinRate>;
	['SupperReward']: IObjectClass<ISupperReward>;
	['SupperPlay']: IObjectClass<ISupperPlay>;
	['SupperExpirence']: IObjectClass<ISupperExpirence>;
	['Start_Panel']: IObjectClass<IStart_Panel>;
	['star_home_3']: IObjectClass<Istar_home_3>;
	['star_home_2']: IObjectClass<Istar_home_2>;
	['star_home_']: IObjectClass<Istar_home_>;
	['Sprite']: IObjectClass<ISprite>;
	['space_4']: IObjectClass<Ispace_4>;
	['space_3']: IObjectClass<Ispace_3>;
	['space_2']: IObjectClass<Ispace_2>;
	['space_1']: IObjectClass<Ispace_1>;
	['SkillLevelHeader']: IObjectClass<ISkillLevelHeader>;
	['SkillLevelBackground']: IObjectClass<ISkillLevelBackground>;
	['show_effect2']: IObjectClass<Ishow_effect2>;
	['show_effect']: IObjectClass<Ishow_effect>;
	['show_background_GameOver']: IObjectClass<Ishow_background_GameOver>;
	['scroll']: IObjectClass<Iscroll>;
	['Reward']: IObjectClass<IReward>;
	['Player']: IObjectClass<IPlayer>;
	['PhotoFaceBookConnect']: IObjectClass<IPhotoFaceBookConnect>;
	['Photo_profile']: IObjectClass<IPhoto_profile>;
	['Particles2']: IObjectClass<IParticles2>;
	['Particles']: IObjectClass<IParticles>;
	['panel_game_success']: IObjectClass<Ipanel_game_success>;
	['Panel']: IObjectClass<IPanel>;
	['Multiplayer']: IObjectClass<IMultiplayer>;
	['Mouse']: IObjectClass<IMouse>;
	['moregamess']: IObjectClass<Imoregamess>;
	['MediumWinRate']: IObjectClass<IMediumWinRate>;
	['MediumReward']: IObjectClass<IMediumReward>;
	['MediumPlay']: IObjectClass<IMediumPlay>;
	['MediumExpirence']: IObjectClass<IMediumExpirence>;
	['logo_home']: IObjectClass<Ilogo_home>;
	['LocalStorage']: IObjectClass<ILocalStorage>;
	['Keyboard']: IObjectClass<IKeyboard>;
	['inimigo']: IObjectClass<Iinimigo>;
	['ico_trophy_3']: IObjectClass<Iico_trophy_3>;
	['ico_trophy_2']: IObjectClass<Iico_trophy_2>;
	['ico_trophy_1']: IObjectClass<Iico_trophy_1>;
	['home_trofeus']: IObjectClass<Ihome_trofeus>;
	['HardWinRate']: IObjectClass<IHardWinRate>;
	['HardWinExpirence']: IObjectClass<IHardWinExpirence>;
	['HardReward']: IObjectClass<IHardReward>;
	['HardPlay']: IObjectClass<IHardPlay>;
	['Guide']: IObjectClass<IGuide>;
	['gamepad_middle']: IObjectClass<Igamepad_middle>;
	['gamepad']: IObjectClass<Igamepad>;
	['Function']: IObjectClass<IFunction>;
	['Food']: IObjectClass<IFood>;
	['Facebook']: IObjectClass<IFacebook>;
	['Expirence']: IObjectClass<IExpirence>;
	['EasyWinRate']: IObjectClass<IEasyWinRate>;
	['EasyReward']: IObjectClass<IEasyReward>;
	['EasyPlay']: IObjectClass<IEasyPlay>;
	['EasyExpirence']: IObjectClass<IEasyExpirence>;
	['chec']: IObjectClass<Ichec>;
	['camera']: IObjectClass<Icamera>;
	['Button']: IObjectClass<IButton>;
	['btn_turbo']: IObjectClass<Ibtn_turbo>;
	['btn_play']: IObjectClass<Ibtn_play>;
	['btn_next_turn_won']: IObjectClass<Ibtn_next_turn_won>;
	['btn_next_turn']: IObjectClass<Ibtn_next_turn>;
	['btn_home_buy_turn']: IObjectClass<Ibtn_home_buy_turn>;
	['btn_claim_reward_submit']: IObjectClass<Ibtn_claim_reward_submit>;
	['btn_claim_reward']: IObjectClass<Ibtn_claim_reward>;
	['btn_buy_reward']: IObjectClass<Ibtn_buy_reward>;
	['btn_back_won']: IObjectClass<Ibtn_back_won>;
	['btn_back']: IObjectClass<Ibtn_back>;
	['Browser']: IObjectClass<IBrowser>;
	['Body_Player']: IObjectClass<IBody_Player>;
	['Body_Enemy_04']: IObjectClass<IBody_Enemy_04>;
	['Body_Enemy_03']: IObjectClass<IBody_Enemy_03>;
	['Body_Enemy_02']: IObjectClass<IBody_Enemy_02>;
	['Body_Enemy_01']: IObjectClass<IBody_Enemy_01>;
	['bar_solid']: IObjectClass<Ibar_solid>;
	['bar_Shield']: IObjectClass<Ibar_Shield>;
	['bar_level']: IObjectClass<Ibar_level>;
	['Audio']: IObjectClass<IAudio>;
	['ArrayWallet']: IObjectClass<IArrayWallet>;
	['AJAX']: IObjectClass<IAJAX>;
	['Enemy_04']: IObjectClass<IEnemy_04>;
	['Enemy_03']: IObjectClass<IEnemy_03>;
	['Enemy_02']: IObjectClass<IEnemy_02>;
	['Enemy_01']: IObjectClass<IEnemy_01>;
	['Enemys']: IObjectClass<IEnemys>;
}

interface IGlobalVars extends VariableType {
	/** WalletID of User **/
	["walletIDHome"]: string
	/**  **/
	["turnLimitHome"]: number
	/**  **/
	["turnNemberHome"]: number
	/**  **/
	["tokenHome"]: string
	/**  **/
	["userDataHome"]: string
	/**  **/
	["tempDataHome"]: string
	/**  **/
	["apiUrlHome"]: string
	/**  **/
	["GameMode"]: string
	/**  **/
	["Style_Background"]: number
	/** WalletID of User **/
	["walletID"]: string
	/**  **/
	["rewardNumber"]: number
	/**  **/
	["expNumber"]: number
	/**  **/
	["rewardType"]: string
	/**  **/
	["activityName"]: string
	/**  **/
	["turnLimit"]: number
	/**  **/
	["turnNember"]: number
	/**  **/
	["token"]: string
	/**  **/
	["userData"]: string
	/**  **/
	["tempData"]: string
	/**  **/
	["apiUrl"]: string
	/**  **/
	["dasboardUrrl"]: string
	/**  **/
	["countDown"]: number
	/**  **/
	["TestNet"]: string
	/**  **/
	["ValidateWallet"]: number
	/**  **/
	["Size_Enemy_4"]: number
	/**  **/
	["Size_Enemy_3"]: number
	/**  **/
	["Size_Enemy_2"]: number
	/**  **/
	["Size_Enemy_1"]: number
	/**  **/
	["PowerLevel"]: number
	/**  **/
	["PowerPlayer"]: number
	/**  **/
	["StartTime"]: number
	/**  **/
	["Style_Body_Enemy"]: number
	/**  **/
	["Size_Enemy"]: number
	/**  **/
	["Style_Body_Player"]: number
	/** N-normal, R-fast **/
	["Speedy_Player"]: string
	/**  **/
	["Size_Player"]: number
}

interface Blob {
    readonly size: number;
    readonly type: string;
    slice(start?: number, end?: number, contentType?: string): Blob;
}

interface IAssetManager {
    fetchText(url: string): Promise<string>;
    fetchJson(url: string): Promise<unknown>;
    fetchBlob(url: string): Promise<Blob>;
    fetchArrayBuffer(url: string): Promise<ArrayBuffer>;
    getProjectFileUrl(url: string): Promise<string>;
    getMediaFileUrl(url: string): Promise<string>;
    mediaFolder: string;
    isWebMOpusSupported: boolean;
    decodeWebMOpus(audioContext: unknown, arrayBuffer: ArrayBuffer): Promise<unknown>;
    loadScripts (...urls: Array<string>): Promise<void>;
    compileWebAssembly(url: string): Promise<unknown>;
}
declare var IAssetManager:  { new(): IAssetManager };

interface IStorage {
    getItem(key: string): Promise<string>;
    setItem(key: string): Promise<void>;
    removeItem(key: string): Promise<void>;
    clear(): Promise<void>;
    keys(): Promise<string[]>;
}
declare var IStorage:  { new(): IStorage };

interface ILayout {
    name: string;
    index: number;
    addEventListener(eventName: 'beforelayoutstart' | 'afterlayoutstart', callback: (...params: unknown[]) => void): void;
    removeEventListener(eventName: 'beforelayoutstart' | 'afterlayoutstart', callback: (...params: unknown[]) => void): void;
    getLayer(layerNameOrIndex: string | number): ILayer;
    getAllLayers(): Array<ILayer>;
    width: number;
    height: number;
    scrollX: number;
    scrollY: number;
    scrollTo(x: number, y: number): void;
    scale: number;
    projection: 'perspective' | 'orthographic';
    setVanishingPoint(x: number, y: number): void;
    getVanishingPoint(): [number, number];
    effects: Array<IEffectInstance>;
}
declare var ILayout:  { new(): ILayout };

interface ILayer {
    name: string;
    index: number;
    layout: ILayout;
    isVisible: boolean;
    isTransparent: boolean;
    backgroundColor: [number, number, number];
    scrollX: number;
    scrollY: number;
    scrollTo(x: number, y: number): void;
    restoreScrollPosition(): void;
    parallaxX: number;
    parallaxY: number;
    opacity: number;
    scale: number;
    scaleRate: number;
    angle: number;
    zElevation: number;
    getViewport(): DOMRect;
    isForceOwnTexture: boolean;
    blendMode: 'normal' | 'additive' | 'copy' | 'destination-over' | 'source-in' | 'destination-in' | 'source-out' | 'destination-out' | 'source-atop' | 'destination-atop';
    effects: Array<IEffectInstance>;
    cssPxToLayer(clientX: number, clientY: number, z?: number): [number, number];
    layerToCssPx(clientX: number, clientY: number, z?: number): [number, number];
}
declare var ILayer:  { new(): ILayer };

interface IEffectInstance {
    index: number;
    name: string;
    isActive: boolean;
    setParamater(index: number, value: number | string | [number, number, number]): void;
    getParamater(index: number): number | string | [number, number, number];
}
declare var IEffectInstance:  { new(): IEffectInstance };

interface IMouseObjectType extends IObjectClass {
    getMouseX(layerNameOrIndex: string | number): number;
    getMouseY(layerNameOrIndex: string | number): number;
    getMousePosition(layerNameOrIndex: string | number): [number, number];
    isMouseButtonDown(button: 1 | 2 | 3): boolean;
}
declare var IMouseObjectType: undefined | { new(): IMouseObjectType };

interface IKeyboardObjectType extends IObjectClass {
    isKeyDown(keyStringOrWhich: number | string): boolean;
}

declare var IKeyboardObjectType: undefined | { new(): IKeyboardObjectType };

interface ITouchObjectType extends IObjectClass {
    requestPermission(type: string): Promise<string>;
}
declare var ITouchObjectType: undefined | { new(): ITouchObjectType };

interface IObjectClass<T = IInstance> {
    readonly name: string;
    addEventListener(eventName: 'instancecreate' | 'instancedestroy', callback: (e: Event & { instance: IInstance }) => void): void;
    removeEventListener(eventName: 'instancecreate' | 'instancedestroy', callback: (e: Event & { instance: IInstance }) => void): void;
    setInstanceClass(classType: { new(): unknown }): void;
    getAllInstances(): Array<T>
    getFirstInstance(): T | undefined
    intances(): Iterator<T>;
    getPickedInstances(): Array<T>
    getFirstPickedInstance(): T | undefined
    pickedInstances(): Iterator<T>;
    createInstance(layerNameOrIndex: string | number, x: number, y: number, createHierachy: boolean): T
}
declare var IObjectClass: { new(): IObjectClass };

interface IWinRateVars extends VariableType {
	
}
interface IWinRateBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IWinRate extends ITextInstance {
	instVars: IWinRateVars;
	behaviors: IWinRateBehaviors;
}

interface ITXT_YOU_HAVE_TURNSVars extends VariableType {
	
}
interface ITXT_YOU_HAVE_TURNSBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface ITXT_YOU_HAVE_TURNS extends ITextInstance {
	instVars: ITXT_YOU_HAVE_TURNSVars;
	behaviors: ITXT_YOU_HAVE_TURNSBehaviors;
}

interface ITXT_YOU_HAVE_NO_TURNVars extends VariableType {
	
}
interface ITXT_YOU_HAVE_NO_TURNBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface ITXT_YOU_HAVE_NO_TURN extends ITextInstance {
	instVars: ITXT_YOU_HAVE_NO_TURNVars;
	behaviors: ITXT_YOU_HAVE_NO_TURNBehaviors;
}

interface ITXT_TURN_NUMBERVars extends VariableType {
	
}
interface ITXT_TURN_NUMBERBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface ITXT_TURN_NUMBER extends ITextInstance {
	instVars: ITXT_TURN_NUMBERVars;
	behaviors: ITXT_TURN_NUMBERBehaviors;
}

interface ITXT_TIME_LINEVars extends VariableType {
	
}
interface ITXT_TIME_LINEBehaviors extends Record<string, IBehaviorInstance> {
	['Pin']: IBehaviorInstance
	['Flash']: IBehaviorInstance
}
interface ITXT_TIME_LINE extends IWorldInstance {
	instVars: ITXT_TIME_LINEVars;
	behaviors: ITXT_TIME_LINEBehaviors;
}

interface ITXT_Score_ShowVars extends VariableType {
	
}
interface ITXT_Score_ShowBehaviors extends Record<string, IBehaviorInstance> {
	['Fade']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface ITXT_Score_Show extends IWorldInstance {
	instVars: ITXT_Score_ShowVars;
	behaviors: ITXT_Score_ShowBehaviors;
}

interface ITXT_SCORE_PANEL_HEADERVars extends VariableType {
	
}
interface ITXT_SCORE_PANEL_HEADERBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface ITXT_SCORE_PANEL_HEADER extends ITextInstance {
	instVars: ITXT_SCORE_PANEL_HEADERVars;
	behaviors: ITXT_SCORE_PANEL_HEADERBehaviors;
}

interface ITXT_REWARD_NUMBERVars extends VariableType {
	
}
interface ITXT_REWARD_NUMBERBehaviors extends Record<string, IBehaviorInstance> {
	['Pin']: IBehaviorInstance
	['Flash']: IBehaviorInstance
	['LiteTween']: IBehaviorInstance
}
interface ITXT_REWARD_NUMBER extends IWorldInstance {
	instVars: ITXT_REWARD_NUMBERVars;
	behaviors: ITXT_REWARD_NUMBERBehaviors;
}

interface ITXT_REWARDVars extends VariableType {
	
}
interface ITXT_REWARDBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface ITXT_REWARD extends ITextInstance {
	instVars: ITXT_REWARDVars;
	behaviors: ITXT_REWARDBehaviors;
}

interface ITXT_LIMITATION_TURNVars extends VariableType {
	/**  **/
	['TXT_REWARD']: number;
}
interface ITXT_LIMITATION_TURNBehaviors extends Record<string, IBehaviorInstance> {
	['Pin']: IBehaviorInstance
	['Flash']: IBehaviorInstance
	['LiteTween']: IBehaviorInstance
}
interface ITXT_LIMITATION_TURN extends IWorldInstance {
	instVars: ITXT_LIMITATION_TURNVars;
	behaviors: ITXT_LIMITATION_TURNBehaviors;
}

interface ITXT_LEVELVars extends VariableType {
	
}
interface ITXT_LEVELBehaviors extends Record<string, IBehaviorInstance> {
	['Pin']: IBehaviorInstance
	['Flash']: IBehaviorInstance
}
interface ITXT_LEVEL extends IWorldInstance {
	instVars: ITXT_LEVELVars;
	behaviors: ITXT_LEVELBehaviors;
}

interface ITXT_HOME_ALERT_NO_TURNVars extends VariableType {
	
}
interface ITXT_HOME_ALERT_NO_TURNBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITXT_HOME_ALERT_NO_TURN extends ITextInstance {
	instVars: ITXT_HOME_ALERT_NO_TURNVars;
	behaviors: ITXT_HOME_ALERT_NO_TURNBehaviors;
}

interface ITXT_HEADER_REWARD_NUMBERVars extends VariableType {
	
}
interface ITXT_HEADER_REWARD_NUMBERBehaviors extends Record<string, IBehaviorInstance> {
	['Pin']: IBehaviorInstance
	['Flash']: IBehaviorInstance
	['LiteTween']: IBehaviorInstance
}
interface ITXT_HEADER_REWARD_NUMBER extends IWorldInstance {
	instVars: ITXT_HEADER_REWARD_NUMBERVars;
	behaviors: ITXT_HEADER_REWARD_NUMBERBehaviors;
}

interface ITXT_HEADER_PANELVars extends VariableType {
	
}
interface ITXT_HEADER_PANELBehaviors extends Record<string, IBehaviorInstance> {
	['Pin']: IBehaviorInstance
	['Flash']: IBehaviorInstance
	['LiteTween']: IBehaviorInstance
}
interface ITXT_HEADER_PANEL extends IWorldInstance {
	instVars: ITXT_HEADER_PANELVars;
	behaviors: ITXT_HEADER_PANELBehaviors;
}

interface ITXT_HEADER_EXPVars extends VariableType {
	
}
interface ITXT_HEADER_EXPBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface ITXT_HEADER_EXP extends ITextInstance {
	instVars: ITXT_HEADER_EXPVars;
	behaviors: ITXT_HEADER_EXPBehaviors;
}

interface ITXT_GameOverVars extends VariableType {
	
}
interface ITXT_GameOverBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface ITXT_GameOver extends ISpriteInstance {
	instVars: ITXT_GameOverVars;
	behaviors: ITXT_GameOverBehaviors;
}

interface ITXT_EXPVars extends VariableType {
	
}
interface ITXT_EXPBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface ITXT_EXP extends ITextInstance {
	instVars: ITXT_EXPVars;
	behaviors: ITXT_EXPBehaviors;
}

interface ITXT_COUNT_DOWNVars extends VariableType {
	
}
interface ITXT_COUNT_DOWNBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITXT_COUNT_DOWN extends ITextInstance {
	instVars: ITXT_COUNT_DOWNVars;
	behaviors: ITXT_COUNT_DOWNBehaviors;
}

interface Itrophy_game_over_3Vars extends VariableType {
	
}
interface Itrophy_game_over_3Behaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface Itrophy_game_over_3 extends ISpriteInstance {
	instVars: Itrophy_game_over_3Vars;
	behaviors: Itrophy_game_over_3Behaviors;
}

interface Itrophy_game_over_2Vars extends VariableType {
	
}
interface Itrophy_game_over_2Behaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface Itrophy_game_over_2 extends ISpriteInstance {
	instVars: Itrophy_game_over_2Vars;
	behaviors: Itrophy_game_over_2Behaviors;
}

interface Itrophy_game_over_1Vars extends VariableType {
	
}
interface Itrophy_game_over_1Behaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface Itrophy_game_over_1 extends ISpriteInstance {
	instVars: Itrophy_game_over_1Vars;
	behaviors: Itrophy_game_over_1Behaviors;
}

interface ITouchVars extends VariableType {
	
}
interface ITouchBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITouch extends ITouchObjectType {
	instVars: ITouchVars;
	behaviors: ITouchBehaviors;
}

interface ITiledBackground3Vars extends VariableType {
	
}
interface ITiledBackground3Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITiledBackground3 extends IWorldInstance {
	instVars: ITiledBackground3Vars;
	behaviors: ITiledBackground3Behaviors;
}

interface ITiledBackground2Vars extends VariableType {
	
}
interface ITiledBackground2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITiledBackground2 extends IWorldInstance {
	instVars: ITiledBackground2Vars;
	behaviors: ITiledBackground2Behaviors;
}

interface ITiledBackgroundVars extends VariableType {
	
}
interface ITiledBackgroundBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ITiledBackground extends IWorldInstance {
	instVars: ITiledBackgroundVars;
	behaviors: ITiledBackgroundBehaviors;
}

interface ISupperWinRateVars extends VariableType {
	
}
interface ISupperWinRateBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISupperWinRate extends ITextInstance {
	instVars: ISupperWinRateVars;
	behaviors: ISupperWinRateBehaviors;
}

interface ISupperRewardVars extends VariableType {
	
}
interface ISupperRewardBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISupperReward extends ITextInstance {
	instVars: ISupperRewardVars;
	behaviors: ISupperRewardBehaviors;
}

interface ISupperPlayVars extends VariableType {
	
}
interface ISupperPlayBehaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
}
interface ISupperPlay extends ISpriteInstance {
	instVars: ISupperPlayVars;
	behaviors: ISupperPlayBehaviors;
}

interface ISupperExpirenceVars extends VariableType {
	
}
interface ISupperExpirenceBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISupperExpirence extends ITextInstance {
	instVars: ISupperExpirenceVars;
	behaviors: ISupperExpirenceBehaviors;
}

interface IStart_PanelVars extends VariableType {
	
}
interface IStart_PanelBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IStart_Panel extends IWorldInstance {
	instVars: IStart_PanelVars;
	behaviors: IStart_PanelBehaviors;
}

interface Istar_home_3Vars extends VariableType {
	
}
interface Istar_home_3Behaviors extends Record<string, IBehaviorInstance> {
	['Rotate']: IBehaviorInstance
}
interface Istar_home_3 extends ISpriteInstance {
	instVars: Istar_home_3Vars;
	behaviors: Istar_home_3Behaviors;
}

interface Istar_home_2Vars extends VariableType {
	
}
interface Istar_home_2Behaviors extends Record<string, IBehaviorInstance> {
	['Rotate']: IBehaviorInstance
}
interface Istar_home_2 extends ISpriteInstance {
	instVars: Istar_home_2Vars;
	behaviors: Istar_home_2Behaviors;
}

interface Istar_home_Vars extends VariableType {
	
}
interface Istar_home_Behaviors extends Record<string, IBehaviorInstance> {
	['Rotate']: IBehaviorInstance
}
interface Istar_home_ extends ISpriteInstance {
	instVars: Istar_home_Vars;
	behaviors: Istar_home_Behaviors;
}

interface ISpriteVars extends VariableType {
	
}
interface ISpriteBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISprite extends ISpriteInstance {
	instVars: ISpriteVars;
	behaviors: ISpriteBehaviors;
}

interface Ispace_4Vars extends VariableType {
	
}
interface Ispace_4Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ispace_4 extends ISpriteInstance {
	instVars: Ispace_4Vars;
	behaviors: Ispace_4Behaviors;
}

interface Ispace_3Vars extends VariableType {
	
}
interface Ispace_3Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ispace_3 extends ISpriteInstance {
	instVars: Ispace_3Vars;
	behaviors: Ispace_3Behaviors;
}

interface Ispace_2Vars extends VariableType {
	
}
interface Ispace_2Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ispace_2 extends ISpriteInstance {
	instVars: Ispace_2Vars;
	behaviors: Ispace_2Behaviors;
}

interface Ispace_1Vars extends VariableType {
	
}
interface Ispace_1Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ispace_1 extends ISpriteInstance {
	instVars: Ispace_1Vars;
	behaviors: Ispace_1Behaviors;
}

interface ISkillLevelHeaderVars extends VariableType {
	
}
interface ISkillLevelHeaderBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISkillLevelHeader extends ITextInstance {
	instVars: ISkillLevelHeaderVars;
	behaviors: ISkillLevelHeaderBehaviors;
}

interface ISkillLevelBackgroundVars extends VariableType {
	
}
interface ISkillLevelBackgroundBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ISkillLevelBackground extends ISpriteInstance {
	instVars: ISkillLevelBackgroundVars;
	behaviors: ISkillLevelBackgroundBehaviors;
}

interface Ishow_effect2Vars extends VariableType {
	
}
interface Ishow_effect2Behaviors extends Record<string, IBehaviorInstance> {
	['Rotate']: IBehaviorInstance
	['Sine']: IBehaviorInstance
	['Pin']: IBehaviorInstance
}
interface Ishow_effect2 extends ISpriteInstance {
	instVars: Ishow_effect2Vars;
	behaviors: Ishow_effect2Behaviors;
}

interface Ishow_effectVars extends VariableType {
	
}
interface Ishow_effectBehaviors extends Record<string, IBehaviorInstance> {
	['Rotate']: IBehaviorInstance
	['Pin']: IBehaviorInstance
}
interface Ishow_effect extends ISpriteInstance {
	instVars: Ishow_effectVars;
	behaviors: Ishow_effectBehaviors;
}

interface Ishow_background_GameOverVars extends VariableType {
	
}
interface Ishow_background_GameOverBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
}
interface Ishow_background_GameOver extends ISpriteInstance {
	instVars: Ishow_background_GameOverVars;
	behaviors: Ishow_background_GameOverBehaviors;
}

interface IscrollVars extends VariableType {
	
}
interface IscrollBehaviors extends Record<string, IBehaviorInstance> {
	['Rotate']: IBehaviorInstance
}
interface Iscroll extends ISpriteInstance {
	instVars: IscrollVars;
	behaviors: IscrollBehaviors;
}

interface IRewardVars extends VariableType {
	
}
interface IRewardBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IReward extends ITextInstance {
	instVars: IRewardVars;
	behaviors: IRewardBehaviors;
}

interface IPlayerVars extends VariableType {
	/**  **/
	['Power']: number;
}
interface IPlayerBehaviors extends Record<string, IBehaviorInstance> {
	['Bullet']: IBulletBehaviorInstance
	['BoundToLayout']: IBehaviorInstance
	['ScrollTo']: IBehaviorInstance
}
interface IPlayer extends ISpriteInstance {
	instVars: IPlayerVars;
	behaviors: IPlayerBehaviors;
}

interface IPhotoFaceBookConnectVars extends VariableType {
	
}
interface IPhotoFaceBookConnectBehaviors extends Record<string, IBehaviorInstance> {
	['Pin']: IBehaviorInstance
	['Fade']: IBehaviorInstance
}
interface IPhotoFaceBookConnect extends IWorldInstance {
	instVars: IPhotoFaceBookConnectVars;
	behaviors: IPhotoFaceBookConnectBehaviors;
}

interface IPhoto_profileVars extends VariableType {
	
}
interface IPhoto_profileBehaviors extends Record<string, IBehaviorInstance> {
	['Pin']: IBehaviorInstance
}
interface IPhoto_profile extends ISpriteInstance {
	instVars: IPhoto_profileVars;
	behaviors: IPhoto_profileBehaviors;
}

interface IParticles2Vars extends VariableType {
	
}
interface IParticles2Behaviors extends Record<string, IBehaviorInstance> {
	['Bullet']: IBulletBehaviorInstance
}
interface IParticles2 extends IWorldInstance {
	instVars: IParticles2Vars;
	behaviors: IParticles2Behaviors;
}

interface IParticlesVars extends VariableType {
	
}
interface IParticlesBehaviors extends Record<string, IBehaviorInstance> {
	['Bullet']: IBulletBehaviorInstance
}
interface IParticles extends IWorldInstance {
	instVars: IParticlesVars;
	behaviors: IParticlesBehaviors;
}

interface Ipanel_game_successVars extends VariableType {
	
}
interface Ipanel_game_successBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
}
interface Ipanel_game_success extends ISpriteInstance {
	instVars: Ipanel_game_successVars;
	behaviors: Ipanel_game_successBehaviors;
}

interface IPanelVars extends VariableType {
	
}
interface IPanelBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IPanel extends ISpriteInstance {
	instVars: IPanelVars;
	behaviors: IPanelBehaviors;
}

interface IMultiplayerVars extends VariableType {
	
}
interface IMultiplayerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IMultiplayer extends IWorldInstance {
	instVars: IMultiplayerVars;
	behaviors: IMultiplayerBehaviors;
}

interface IMouseVars extends VariableType {
	
}
interface IMouseBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IMouse extends IMouseObjectType {
	instVars: IMouseVars;
	behaviors: IMouseBehaviors;
}

interface ImoregamessVars extends VariableType {
	
}
interface ImoregamessBehaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
}
interface Imoregamess extends ISpriteInstance {
	instVars: ImoregamessVars;
	behaviors: ImoregamessBehaviors;
}

interface IMediumWinRateVars extends VariableType {
	
}
interface IMediumWinRateBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IMediumWinRate extends ITextInstance {
	instVars: IMediumWinRateVars;
	behaviors: IMediumWinRateBehaviors;
}

interface IMediumRewardVars extends VariableType {
	
}
interface IMediumRewardBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IMediumReward extends ITextInstance {
	instVars: IMediumRewardVars;
	behaviors: IMediumRewardBehaviors;
}

interface IMediumPlayVars extends VariableType {
	
}
interface IMediumPlayBehaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
}
interface IMediumPlay extends ISpriteInstance {
	instVars: IMediumPlayVars;
	behaviors: IMediumPlayBehaviors;
}

interface IMediumExpirenceVars extends VariableType {
	
}
interface IMediumExpirenceBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IMediumExpirence extends ITextInstance {
	instVars: IMediumExpirenceVars;
	behaviors: IMediumExpirenceBehaviors;
}

interface Ilogo_homeVars extends VariableType {
	
}
interface Ilogo_homeBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ilogo_home extends ISpriteInstance {
	instVars: Ilogo_homeVars;
	behaviors: Ilogo_homeBehaviors;
}

interface ILocalStorageVars extends VariableType {
	
}
interface ILocalStorageBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface ILocalStorage extends IWorldInstance {
	instVars: ILocalStorageVars;
	behaviors: ILocalStorageBehaviors;
}

interface IKeyboardVars extends VariableType {
	
}
interface IKeyboardBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IKeyboard extends IKeyboardObjectType {
	instVars: IKeyboardVars;
	behaviors: IKeyboardBehaviors;
}

interface IinimigoVars extends VariableType {
	
}
interface IinimigoBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Iinimigo extends ISpriteInstance {
	instVars: IinimigoVars;
	behaviors: IinimigoBehaviors;
}

interface Iico_trophy_3Vars extends VariableType {
	
}
interface Iico_trophy_3Behaviors extends Record<string, IBehaviorInstance> {
	['Pin']: IBehaviorInstance
}
interface Iico_trophy_3 extends ISpriteInstance {
	instVars: Iico_trophy_3Vars;
	behaviors: Iico_trophy_3Behaviors;
}

interface Iico_trophy_2Vars extends VariableType {
	
}
interface Iico_trophy_2Behaviors extends Record<string, IBehaviorInstance> {
	['Pin']: IBehaviorInstance
}
interface Iico_trophy_2 extends ISpriteInstance {
	instVars: Iico_trophy_2Vars;
	behaviors: Iico_trophy_2Behaviors;
}

interface Iico_trophy_1Vars extends VariableType {
	
}
interface Iico_trophy_1Behaviors extends Record<string, IBehaviorInstance> {
	['Pin']: IBehaviorInstance
}
interface Iico_trophy_1 extends ISpriteInstance {
	instVars: Iico_trophy_1Vars;
	behaviors: Iico_trophy_1Behaviors;
}

interface Ihome_trofeusVars extends VariableType {
	
}
interface Ihome_trofeusBehaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
}
interface Ihome_trofeus extends ISpriteInstance {
	instVars: Ihome_trofeusVars;
	behaviors: Ihome_trofeusBehaviors;
}

interface IHardWinRateVars extends VariableType {
	
}
interface IHardWinRateBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IHardWinRate extends ITextInstance {
	instVars: IHardWinRateVars;
	behaviors: IHardWinRateBehaviors;
}

interface IHardWinExpirenceVars extends VariableType {
	
}
interface IHardWinExpirenceBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IHardWinExpirence extends ITextInstance {
	instVars: IHardWinExpirenceVars;
	behaviors: IHardWinExpirenceBehaviors;
}

interface IHardRewardVars extends VariableType {
	
}
interface IHardRewardBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IHardReward extends ITextInstance {
	instVars: IHardRewardVars;
	behaviors: IHardRewardBehaviors;
}

interface IHardPlayVars extends VariableType {
	
}
interface IHardPlayBehaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
}
interface IHardPlay extends ISpriteInstance {
	instVars: IHardPlayVars;
	behaviors: IHardPlayBehaviors;
}

interface IGuideVars extends VariableType {
	
}
interface IGuideBehaviors extends Record<string, IBehaviorInstance> {
	['Pin']: IBehaviorInstance
	['Fade']: IBehaviorInstance
}
interface IGuide extends IWorldInstance {
	instVars: IGuideVars;
	behaviors: IGuideBehaviors;
}

interface Igamepad_middleVars extends VariableType {
	
}
interface Igamepad_middleBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Igamepad_middle extends ISpriteInstance {
	instVars: Igamepad_middleVars;
	behaviors: Igamepad_middleBehaviors;
}

interface IgamepadVars extends VariableType {
	
}
interface IgamepadBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Igamepad extends ISpriteInstance {
	instVars: IgamepadVars;
	behaviors: IgamepadBehaviors;
}

interface IFunctionVars extends VariableType {
	
}
interface IFunctionBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IFunction extends IWorldInstance {
	instVars: IFunctionVars;
	behaviors: IFunctionBehaviors;
}

interface IFoodVars extends VariableType {
	
}
interface IFoodBehaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
	['Fade']: IBehaviorInstance
	['Rotate']: IBehaviorInstance
	['CustomMovement']: IBehaviorInstance
}
interface IFood extends ISpriteInstance {
	instVars: IFoodVars;
	behaviors: IFoodBehaviors;
}

interface IFacebookVars extends VariableType {
	
}
interface IFacebookBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IFacebook extends IWorldInstance {
	instVars: IFacebookVars;
	behaviors: IFacebookBehaviors;
}

interface IExpirenceVars extends VariableType {
	
}
interface IExpirenceBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IExpirence extends ITextInstance {
	instVars: IExpirenceVars;
	behaviors: IExpirenceBehaviors;
}

interface IEasyWinRateVars extends VariableType {
	
}
interface IEasyWinRateBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IEasyWinRate extends ITextInstance {
	instVars: IEasyWinRateVars;
	behaviors: IEasyWinRateBehaviors;
}

interface IEasyRewardVars extends VariableType {
	
}
interface IEasyRewardBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IEasyReward extends ITextInstance {
	instVars: IEasyRewardVars;
	behaviors: IEasyRewardBehaviors;
}

interface IEasyPlayVars extends VariableType {
	
}
interface IEasyPlayBehaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
}
interface IEasyPlay extends ISpriteInstance {
	instVars: IEasyPlayVars;
	behaviors: IEasyPlayBehaviors;
}

interface IEasyExpirenceVars extends VariableType {
	
}
interface IEasyExpirenceBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IEasyExpirence extends ITextInstance {
	instVars: IEasyExpirenceVars;
	behaviors: IEasyExpirenceBehaviors;
}

interface IchecVars extends VariableType {
	/**  **/
	['active']: number;
}
interface IchecBehaviors extends Record<string, IBehaviorInstance> {
	['Pin']: IBehaviorInstance
}
interface Ichec extends ISpriteInstance {
	instVars: IchecVars;
	behaviors: IchecBehaviors;
}

interface IcameraVars extends VariableType {
	
}
interface IcameraBehaviors extends Record<string, IBehaviorInstance> {
	['ScrollTo']: IBehaviorInstance
}
interface Icamera extends ISpriteInstance {
	instVars: IcameraVars;
	behaviors: IcameraBehaviors;
}

interface IButtonVars extends VariableType {
	
}
interface IButtonBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IButton extends IButtonInstance {
	instVars: IButtonVars;
	behaviors: IButtonBehaviors;
}

interface Ibtn_turboVars extends VariableType {
	/**  **/
	['Active_Turbo']: number;
}
interface Ibtn_turboBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ibtn_turbo extends ISpriteInstance {
	instVars: Ibtn_turboVars;
	behaviors: Ibtn_turboBehaviors;
}

interface Ibtn_playVars extends VariableType {
	
}
interface Ibtn_playBehaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
}
interface Ibtn_play extends ISpriteInstance {
	instVars: Ibtn_playVars;
	behaviors: Ibtn_playBehaviors;
}

interface Ibtn_next_turn_wonVars extends VariableType {
	
}
interface Ibtn_next_turn_wonBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface Ibtn_next_turn_won extends ISpriteInstance {
	instVars: Ibtn_next_turn_wonVars;
	behaviors: Ibtn_next_turn_wonBehaviors;
}

interface Ibtn_next_turnVars extends VariableType {
	
}
interface Ibtn_next_turnBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface Ibtn_next_turn extends ISpriteInstance {
	instVars: Ibtn_next_turnVars;
	behaviors: Ibtn_next_turnBehaviors;
}

interface Ibtn_home_buy_turnVars extends VariableType {
	
}
interface Ibtn_home_buy_turnBehaviors extends Record<string, IBehaviorInstance> {
	['Sine']: IBehaviorInstance
}
interface Ibtn_home_buy_turn extends ISpriteInstance {
	instVars: Ibtn_home_buy_turnVars;
	behaviors: Ibtn_home_buy_turnBehaviors;
}

interface Ibtn_claim_reward_submitVars extends VariableType {
	
}
interface Ibtn_claim_reward_submitBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface Ibtn_claim_reward_submit extends ISpriteInstance {
	instVars: Ibtn_claim_reward_submitVars;
	behaviors: Ibtn_claim_reward_submitBehaviors;
}

interface Ibtn_claim_rewardVars extends VariableType {
	
}
interface Ibtn_claim_rewardBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface Ibtn_claim_reward extends ISpriteInstance {
	instVars: Ibtn_claim_rewardVars;
	behaviors: Ibtn_claim_rewardBehaviors;
}

interface Ibtn_buy_rewardVars extends VariableType {
	
}
interface Ibtn_buy_rewardBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface Ibtn_buy_reward extends ISpriteInstance {
	instVars: Ibtn_buy_rewardVars;
	behaviors: Ibtn_buy_rewardBehaviors;
}

interface Ibtn_back_wonVars extends VariableType {
	
}
interface Ibtn_back_wonBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface Ibtn_back_won extends ISpriteInstance {
	instVars: Ibtn_back_wonVars;
	behaviors: Ibtn_back_wonBehaviors;
}

interface Ibtn_backVars extends VariableType {
	
}
interface Ibtn_backBehaviors extends Record<string, IBehaviorInstance> {
	['LiteTween']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface Ibtn_back extends ISpriteInstance {
	instVars: Ibtn_backVars;
	behaviors: Ibtn_backBehaviors;
}

interface IBrowserVars extends VariableType {
	
}
interface IBrowserBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBrowser extends IWorldInstance {
	instVars: IBrowserVars;
	behaviors: IBrowserBehaviors;
}

interface IBody_PlayerVars extends VariableType {
	
}
interface IBody_PlayerBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBody_Player extends ISpriteInstance {
	instVars: IBody_PlayerVars;
	behaviors: IBody_PlayerBehaviors;
}

interface IBody_Enemy_04Vars extends VariableType {
	
}
interface IBody_Enemy_04Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBody_Enemy_04 extends ISpriteInstance {
	instVars: IBody_Enemy_04Vars;
	behaviors: IBody_Enemy_04Behaviors;
}

interface IBody_Enemy_03Vars extends VariableType {
	
}
interface IBody_Enemy_03Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBody_Enemy_03 extends ISpriteInstance {
	instVars: IBody_Enemy_03Vars;
	behaviors: IBody_Enemy_03Behaviors;
}

interface IBody_Enemy_02Vars extends VariableType {
	
}
interface IBody_Enemy_02Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBody_Enemy_02 extends ISpriteInstance {
	instVars: IBody_Enemy_02Vars;
	behaviors: IBody_Enemy_02Behaviors;
}

interface IBody_Enemy_01Vars extends VariableType {
	
}
interface IBody_Enemy_01Behaviors extends Record<string, IBehaviorInstance> {
	
}
interface IBody_Enemy_01 extends ISpriteInstance {
	instVars: IBody_Enemy_01Vars;
	behaviors: IBody_Enemy_01Behaviors;
}

interface Ibar_solidVars extends VariableType {
	
}
interface Ibar_solidBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface Ibar_solid extends ISpriteInstance {
	instVars: Ibar_solidVars;
	behaviors: Ibar_solidBehaviors;
}

interface Ibar_ShieldVars extends VariableType {
	
}
interface Ibar_ShieldBehaviors extends Record<string, IBehaviorInstance> {
	['Fade']: IBehaviorInstance
	['Sine']: IBehaviorInstance
}
interface Ibar_Shield extends ISpriteInstance {
	instVars: Ibar_ShieldVars;
	behaviors: Ibar_ShieldBehaviors;
}

interface Ibar_levelVars extends VariableType {
	
}
interface Ibar_levelBehaviors extends Record<string, IBehaviorInstance> {
	['DragDrop']: IBehaviorInstance
}
interface Ibar_level extends ISpriteInstance {
	instVars: Ibar_levelVars;
	behaviors: Ibar_levelBehaviors;
}

interface IAudioVars extends VariableType {
	
}
interface IAudioBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IAudio extends IAudioObjectType {
	instVars: IAudioVars;
	behaviors: IAudioBehaviors;
}

interface IArrayWalletVars extends VariableType {
	/**  **/
	['turns']: string;
}
interface IArrayWalletBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IArrayWallet extends IInstance {
	instVars: IArrayWalletVars;
	behaviors: IArrayWalletBehaviors;
}

interface IAJAXVars extends VariableType {
	
}
interface IAJAXBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IAJAX extends IWorldInstance {
	instVars: IAJAXVars;
	behaviors: IAJAXBehaviors;
}

interface IEnemy_04Vars extends VariableType {
	/**  **/
	['Style']: number;
	/**  **/
	['Active']: number;
	/**  **/
	['Speedy']: number;
}
interface IEnemy_04Behaviors extends Record<string, IBehaviorInstance> {
	['Bullet']: IBulletBehaviorInstance
	['BoundToLayout']: IBehaviorInstance
}
interface IEnemy_04 extends ISpriteInstance {
	instVars: IEnemy_04Vars;
	behaviors: IEnemy_04Behaviors;
}

interface IEnemy_03Vars extends VariableType {
	/**  **/
	['Style']: number;
	/**  **/
	['Active']: number;
	/**  **/
	['Speedy']: number;
}
interface IEnemy_03Behaviors extends Record<string, IBehaviorInstance> {
	['Bullet']: IBulletBehaviorInstance
	['BoundToLayout']: IBehaviorInstance
}
interface IEnemy_03 extends ISpriteInstance {
	instVars: IEnemy_03Vars;
	behaviors: IEnemy_03Behaviors;
}

interface IEnemy_02Vars extends VariableType {
	/**  **/
	['Style']: number;
	/**  **/
	['Active']: number;
	/**  **/
	['Speedy']: number;
}
interface IEnemy_02Behaviors extends Record<string, IBehaviorInstance> {
	['Bullet']: IBulletBehaviorInstance
	['BoundToLayout']: IBehaviorInstance
}
interface IEnemy_02 extends ISpriteInstance {
	instVars: IEnemy_02Vars;
	behaviors: IEnemy_02Behaviors;
}

interface IEnemy_01Vars extends VariableType {
	/**  **/
	['Style']: number;
	/**  **/
	['Active']: number;
	/**  **/
	['Speedy']: number;
}
interface IEnemy_01Behaviors extends Record<string, IBehaviorInstance> {
	['Bullet']: IBulletBehaviorInstance
	['BoundToLayout']: IBehaviorInstance
}
interface IEnemy_01 extends ISpriteInstance {
	instVars: IEnemy_01Vars;
	behaviors: IEnemy_01Behaviors;
}

interface IEnemysVars extends VariableType {
	
}
interface IEnemysBehaviors extends Record<string, IBehaviorInstance> {
	
}
interface IEnemys extends ISpriteInstance {
	instVars: IEnemysVars;
	behaviors: IEnemysBehaviors;
}


interface IInstance {
    addEventListener(eventName: 'destroy', callback: (...params: unknown[]) => void): void;
    removeEventListener(eventName: 'destroy', callback: (...params: unknown[]) => void): void;
    dispatchEvent(e: Event): void;
    runtime: IRuntime;
    objectType: IObjectClass;
    instVars: VariableType;
    behaviors: Record<string, IBehaviorInstance>;
    readonly uid: number;
    destroy(): void;
}
declare var IInstance: { new(): IInstance };

interface I3DCameraObjectType extends IObjectClass {
    lookAtPosition(camerax: number, cameraY: number, cameraZ: number, lookX: number, lookY: number, lookZ: number, upX: number, upY: number, upZ: number): void;
    lookParallelToLayout(cameraX: number, cameraY: number, cameraZ: number, lookAngle: number): void;
    restore2DCamera(): void;
    moveAlongLayoutAxis(distance: number, axis: 'x' | 'y' | 'z', which: 'camera' | 'look' | 'both'): void;
    moveAlongCameraAxis(distance: number, axis: 'forward' | 'up' | 'right', which: 'camera' | 'look' | 'both'): void;
    getCameraPosition(): [number, number, number];
    getLookPosition(): [number, number, number];
    getForwardVector(): [number, number, number];
    getForwardVector(): [number, number, number];
    getUpVector(): [number, number, number];
    readonly zScale: number;
}

interface I3DShapeInstance extends IWorldInstance {
    shape: 'box' | 'prism' | 'wedge' | 'pyramid' | 'corner-out' | 'corner-in';
    zHeight: number;
    setFaceVisible(face: 'back' | 'front' | 'left' | 'right' | 'top' | 'bottom', visible: boolean): void;
    isFaceVisible(face: 'back' | 'front' | 'left' | 'right' | 'top' | 'bottom'): boolean;
    setFaceImage(face: 'back' | 'front' | 'left' | 'right' | 'top' | 'bottom', image: 'back' | 'front' | 'left' | 'right' | 'top' | 'bottom'): void;
    setFaceObject(face: 'back' | 'front' | 'left' | 'right' | 'top' | 'bottom', objectClass: IObjectClass): void;
    zTilingFactor: number;
    getImagePointCount(): number;
    getImagePointX(nameOrIndex: string | number): number
    getImagePointY(nameOrIndex: string | number): number
    getImagePoint(nameOrIndex: string | number): [number, number]
}
declare var I3DShapeInstance: undefined | { new(): I3DShapeInstance };

interface IArrayInstance extends IWorldInstance {
    width: number;
    height: number;
    depth: number;
    setSize(width: number, height?: number, depth?: number): void;
    getAt(x?: number, y?: number, z?: number): string | number;
    setAt(val: string | number, x: number, y?: number, z?: number): void;
}
declare var IArrayInstance: undefined | { new(): IArrayInstance };

interface IAudioObjectType extends IObjectClass {
    audioContext: AudioContext;
    destinationNode: unknown;
}
declare var IAudioObjectType: undefined | { new(): IAudioObjectType };

interface IBinaryDataInstance extends IInstance {
    setArrayBufferCopy(viewOrBuffer: ArrayBuffer | DataView): void;
    setArrayBufferTransfer(arrayBuffer: ArrayBuffer): void;
    getArrayBufferCopy(): ArrayBuffer;
    getArrayBufferReadOnly(): ArrayBuffer;
}
declare var IBinaryDataInstance: undefined | { new(): IBinaryDataInstance };

interface IButtonInstance extends IDOMInstance {
    addEventListener(eventName: 'click', callback: (...params: unknown[]) => void): void;
    text: string;
    tooltip: string;
    isEnabled: boolean;
    isChecked: false;
}
declare var IButtonInstance: undefined | { new(): IButtonInstance };

interface IDictionaryInstance extends IInstance {
    getDataMap(): Record<string, string | number>;
}
declare var IDictionaryInstance: undefined | { new(): IDictionaryInstance };

interface IDrawingCanvasInstance extends IWorldInstance {
    readonly surfaceDeviceWidth: number;    
    readonly surfaceDeviceHeight:  number;
    getImagePixelData: Promise<ImageData>;
    loadImagePixelData(imageData: ImageData, premultiplyAlpha?: boolean): void;  
}
declare var IDrawingCanvasInstance: undefined | { new(): IDrawingCanvasInstance };

interface IJsonInstance extends IInstance {
    getJsonDataCopy(): unknown;
    setJsonDataCopy(object: unknown): void;
    setJsonString(string: string): void;
    toCompactString(): string;
    toBeautifiedString(): string;
}
declare var IJsonInstance: undefined | { new(): IJsonInstance };

interface ISliderBarInstance extends IDOMInstance {
    addEventListener(eventName: 'click' | 'change', callback: (...params: unknown[]) => void): void;
    value: number;
    maximum: number;
    minimum: number;
    step: number;
    tooltip: string;
    isEnabled: boolean;
}
declare var ISliderBarInstance: undefined | { new(): ISliderBarInstance };

interface ISpriteInstance extends IWorldInstance {
    setAnimation(animationName: string, from?: 'beginning' | 'current-frame'): void;
    readonly animationName: string;
    startAnimation(from?: 'current-frame' | 'begininng'): void;
    stopAnimation(): void;
    animationFrame: number;
    animationSpeed: number;
    animationRepeatToFrame: number;
    readonly imageWidth: number;
    readonly imageHeight: number;
    getImagePointCount(): number;
    getImagePointX(nameOrIndex: string | number): number;
    getImagePointY(nameOrIndex: string | number): number;
    getImagePoint(nameOrIndex: string | number): [number | number];
    getPolyPointCount(): number;
    getPolyPointX(index: number): number;
    getPolyPointY(index: number): number;
    getPolyPoint(index: number): [number | number];
}
declare var ISpriteInstance: undefined | { new(): ISpriteInstance };

interface ISpriteFontInstance extends IWorldInstance {
    text: string;
    typewriterText(text: string, duration: number): void;
    typewriterFinish(): void;
    characterScale: number;
    characterSpacing: number;
    lineHeight: number;
    horizontalAlign: 'left' | 'center' | 'right';
    verticalAlign: 'top' | 'center' | 'bottom';
    wordWrapMode: 'word' | 'character';
}
declare var ISpriteFontInstance: undefined | { new(): ISpriteFontInstance };

interface ITextInstance extends IWorldInstance {
    text: string;
    typewriterText(text: string, duration: number): void;
    typewriterFinish(): void;
    fontColor: [number, number, number];
    fontFace: string;
    isBold: boolean;
    isItalic: boolean;
    sizePt: number;
    lineHeight: number;
    horizontalAlign: 'left' | 'center' | 'right';
    verticalAlign: 'top' | 'center' | 'bottom';
    wordWrapMode: 'word' | 'character';
    textWidth: number;
    textHeight: number;
}
declare var ITextInstance: undefined | { new(): ITextInstance };

interface ITextInputInstance extends IDOMInstance {
    addEventListener(eventName: 'click' | 'dblclick' | 'change', callback: (...params: unknown[]) => void): void;
    text: string;
    placeholder: string;
    tooltip: string;
    isEnabled: boolean;
    isReadOnly: boolean;
    scrollToBottom(): void;
    maxLength: number;
}
declare var ITextInputInstance: undefined | { new(): ITextInputInstance };

interface ITiledBackgroundInstance extends IWorldInstance {
    imageHeight: number;
    imageWidth: number;
    imageOffsetX: number;
    imageOffsetY: number;
    imageScaleX: number;
    imageScaleY: number;
    imageAngle: number;
    imageAngleDegrees: number;
}
declare var ITiledBackgroundInstance: undefined | { new(): ITiledBackgroundInstance };

interface ITilemapInstance extends IWorldInstance {
    TILE_FLIPPED_HORIZONTAL: -0x80000000;
    TILE_FLIPPED_VERTICAL: 0x40000000;
    TILE_FLIPPED_DIAGONAL: 0x20000000;
    TILE_FLAGS_MASK: 0xE0000000;
    TILE_ID_MASK: 0x1FFFFFFF;

    readonly mapWidth: number;
    readonly mapHeight: number;
    readonly mapDisplayHeight: number;
    readonly mapDisplayWidth: number;
    readonly tileWidth: number;
    readonly tileHeight: number;
    getTileAt(x: number, y: number): number;
    setTileAt(x: number, y: number, tile: number): void;
}
declare var ITilemapInstance: undefined | { new(): ITilemapInstance };

interface IDOMInstance {
    focus(): void;
    blur(): void;
    setCssStyle(prop: string, value: string): void;
    getElement(): HTMLElement;
}
declare var IDOMInstance: undefined | { new(): IDOMInstance };

interface IWorldInstance extends IInstance  {
    layout: ILayout;
    layer: ILayer;
    x: number;
    y: number;
    zElevation: number;
    readonly totalZElevation: number;
    width: number;
    height: number;
    angle: number;
    angleDegrees: number;
    getBoundingBox(): DOMRect;
    getBoundingQuad(): DOMQuad;
    isVisible: boolean;
    opacity: boolean;
    colorRgb: [number, number, number];
    blendMode: 'normal' | 'additive' | 'copy' | 'destination-over' | 'source-in' | 'destination-in' | 'source-out' | 'destination-out' | 'source-atop' | 'destination-atop';
    effects: Array<IEffectInstance>;
    moveToTop(): void;
    moveToBottom(): void;
    moveToLayer(layer: ILayer): void;
    moveAdjacentToInstance(other: IWorldInstance, isAfter: boolean): void;
    readonly zIndex: number;
    containsPoint(x: number, y: number): boolean;
    testOverlap(worldInstance: IWorldInstance): boolean;
    testOverlapSolid(): IWorldInstance | null;
    createMesh(hSize: number, vSize: number): void;
    releaseMesh(): void;
    setMeshPoint(col: number, row: number, options: { mode?: 'absolute' | 'relative', x?: number, y?: number, u?: number, v?: number, zElevation?: number}): void;
    getMeshSize(): [number, number];
    getParent(): IWorldInstance | null;
    getTopParent(): IWorldInstance | null;
    parents(): Iterator<IWorldInstance>;
    getChildCount(): number;
    getChildAt(index: number): IWorldInstance | null;
    children(): Iterator<IWorldInstance>;
    allChildren(): Iterator<IWorldInstance>;
    addChild(worldInstance: IWorldInstance, options?: { transformX?: boolean, transformY?: boolean,transformWidth?: boolean,transformHeight?: boolean, transformAngle?: boolean,transformZElevation?: boolean,destroyWithParent?: boolean }): void;
    removeChild(worldInstance: IWorldInstance): void;
    removeFromParent(worldInstance: IWorldInstance): void;
}
declare var IWorldInstance: { new(): IWorldInstance };


interface IBehavior {
    getAllInstances(): Array<IInstance>;
}
declare var IBehavior: { new(): IBehavior };

interface IBehaviorInstance {
    dispatchEvent(e: Event): void;
    instance: IInstance;
    behavior: IBehavior;
    runtime: IRuntime;
}
declare var IBehaviorInstance: { new(): IBehaviorInstance };

interface I8DirectionBehaviorInstance extends IBehaviorInstance {
    stop(): void;
    reverse(): void;
    simulateControl(control: 'left' | 'right' | 'up' | 'down'): void;
    speed: number;
    maxSpeed: number;
    acceleration: number;
    deceleration: number;
    vectorX: number;
    vectorY: number;
    isDefaultControls: boolean;
    isIgnoringInput: boolean;
    isEnabled: boolean;
}
declare var I8DirectionBehaviorInstance: undefined | { new(): I8DirectionBehaviorInstance };

interface IBulletBehaviorInstance extends IBehaviorInstance {
    speed: number;
    acceleration: number;
    gravity: number;
    angleOfMotion: number;
    bounceOffSolids: number;
    distanceTravelled: number;
    isEnabled: boolean;
}
declare var IBulletBehaviorInstance: undefined | { new(): IBulletBehaviorInstance };

interface ICarBehaviorInstance extends IBehaviorInstance {
    stop(): void;
    simulateControl(control: 'left' | 'right' | 'up' | 'down'): void;
    speed: number;
    maxSpeed: number;
    acceleration: number;
    deceleration: number;
    readonly vectorX: number;
    readonly vectorY: number;
    readonly angleOfMotion: number;
    steerSpeed: number;
    driftRecover: number;
    friction: number;
    isDefaultControls: boolean;
    isIgnoringInput: boolean;
    isEnabled: boolean;
}

declare var ICarBehaviorInstance: undefined | { new(): ICarBehaviorInstance };

interface ILOSBehaviorInstance extends IBehaviorInstance {
    range: number;
    coneOfView: number;
    hasLOStoPosition(x: number, y: number): boolean;
    hasLOSBetweenPositions(fromX: number, fromY: number, fromAngle: number, toX: number, toY: number): boolean;
    castRay(fromX: number, fromY: number, toX: number, toY: number, useCollisionCells?: boolean): ILOSBehaviorRay;
    ray: ILOSBehaviorRay;
}

declare var ILOSBehaviorInstance: undefined | { new(): ILOSBehaviorInstance };

interface ILOSBehaviorRay {
    readonly didCollide: boolean;
    readonly hitX: boolean;
    readonly hitY: boolean;
    readonly hitDistance: boolean;
    readonly hitUid: number;
    getNormalX(length: number): number;
    getNormalY(length: number): number;
    getReflectionX(length: number): number;
    getReflectionY(length: number): number;
    readonly reflectionAngle: number;
}

interface IMoveToBehaviorInstance extends IBehaviorInstance {
    addEventListener(type: 'arrived' | 'hitSolid', callback: (...params: unknown[]) => void, capture?: boolean): void;
    removeEventListener(type: 'arrived' | 'hitSolid', callback: (...params: unknown[]) => void, capture?: boolean): void;
    moveToPosition(x: number, y: number, isDirect?: boolean): void
    getTargetX(): number
    getTargetY(): number
    getTargetPosition(): [number, number]
    getWaypointCount(): number
    getWaypointX(index: number): number
    getWaypointY(index: number): number
    getWaypoint(index: number): [number, number]
    stop(): void
    readonly isMoving: boolean
    speed: number
    maxSpeed: number
    acceleration: number
    deceleration: number
    angleOfMotion: number
    rotateSpeed: number;
    isStopOnSolids: boolean;
    isEnabled: boolean;
}

declare var IMoveToBehaviorInstance: undefined | { new(): IMoveToBehaviorInstance };

interface IPathfindingBehaviorInstance extends IBehaviorInstance {
    addEventListener(type: 'arrived', callback: (...params: unknown[]) => void, capture?: boolean): void;
    removeEventListener(type: 'arrived', callback: (...params: unknown[]) => void, capture?: boolean): void;
    map: IPathfindingMap;
    findPath(x: number, y: number): Promise<boolean>;
    startMoving(): void;
    stop(): void;
    maxSpeed: number;
    speed: number;
    acceleration: number;
    deceleration: number;
    rotateSpeed: number;
    readonly isCalculatingPath: boolean;
    readonly isMoving: boolean;
    currentMode: number;
    getNodeCount(): number;
    getNodeXAt(i: number): number;
    getNodeYAt(i: number): number;
    getNodeAt(i: number): [number, number];
    isEnabled: boolean;
}

declare var IPathfindingBehaviorInstance: undefined | { new(): IPathfindingBehaviorInstance };

interface IPathfindingMap {
    isCellObstacle(x: number, y: number): boolean;
    isDiagonalsEnabled: boolean;
    regenerateMap(): Promise<void>;
    regenerateRegion(startX: number, startY: number, endX: number, endY: number): Promise<void>;
    regenerateObjectRegion(objectClass: IObjectClass): Promise<void>;
}

interface IPhysicsBehavior {
    worldGravity: boolean;
    steppingMode: 'fixed' | 'variable';
    velocityIterations: number;
    positionIterations: number;
    setCollisionsEnabled(iObjectClassA: IObjectClass, iObjectClassB: IObjectClass, state: boolean): void;
}

declare var IPhysicsBehavior: undefined | { new(): IPhysicsBehavior };

interface IPhysicsBehaviorInstance extends IBehaviorInstance {
    isEnabled: boolean;
    applyForce(forceX: number, forceY: number, imagePoint?: number): void;
    applyForceTowardPosition(force: number, x: number, y: number, imagePoint?: number): void;
    applyForceAtAngle(force: number, angle: number, imagePoint?: number): void;
    applyImpulse(impluseX: number, impluseY: number, imagePoint?: number): void;
    applyImpulseTowardPosition(impulse: number, x: number, y: number, imagePoint?: number): void;
    applyImpulseAtAngle(impulse: number, angle: number, imagePoint?: number): void;
    applyTorque(torque: number): void;
    applyTorqueToAngle(torque: number, angle: number): void;
    applyTorqueToPosition(torque: number, x: number, y: number): void;
    setVelocity(velocityX: number, velocityY: number): void;
    geVelocityX(): number;
    geVelocityY(): number;
    geVelocity(): [number, number];
    angularVelocity: number;
    isImmovable: boolean;
    isPreventRotation: boolean;
    density: number;
    friction: number;
    elasticity: number;
    linearDamping: number;
    angularDamping: number;
    isBullet: boolean;
    readonly mass: number;
    getCenterOfMassX(): number;
    getCenterOfMassY(): number;
    getCenterOfMass(): [number, number];
    readonly isSleeping: boolean;
    createDistanceJoint(imagePoint: number, otherInstance: IInstance, otherImagePoint: number, damping: number, massSpringDamperFrequency: number): void;
    createRevoluteJoint(imagePoint: number, otherInstance: IInstance): void;
    createLimitedRevoluteJoint(imagePoint: number, otherInstance: IInstance, lower: number, upper: number): void;
    createPrismaticJoint(imagePoint: number, otherInstance: IInstance, axisAngle: number, enableLimit: boolean, lowerTranslation: number, upperTranslation: number, enableMotor: boolean, motorSpeed: number, maxMotorForce: number): void;
    removeAllJoints(): void;
    getContactCount(): number;
    getContactX(index: number): number;
    getContactY(index: number): number;
    getContact(index: number): [number, number];
}

declare var IPhysicsBehaviorInstance: undefined | { new(): IPhysicsBehaviorInstance };

interface IPlatformBehaviorInstance extends IBehaviorInstance {
    fallThrough(): void;
    resetDoubleJump(allow: boolean): void;
    simulateControl(control: 'left' | 'right' | 'jump'): void;
    readonly speed: number;
    maxSpeed: number;
    acceleration: number;
    deceleration: number;
    vectorX: number;
    vectorY: number;
    jumpStength: number;
    maxFallSpeed: number;
    gravity: number;
    gravityAngle: number;
    isDoubleJumpEnabled: boolean;
    jumpSustain: number;
    readonly isMoving: boolean;
    readonly isOnFloor: boolean;
    isByWall(side: 'left' | 'right'): boolean;
    readonly isJumping: boolean;
    readonly isFalling: boolean
    ceilingCollisionMode: 'stop' | 'preserve-momentum';
    isDefaultControls: boolean;
    isIgnoringInput: boolean;
    isEnabled: boolean;
}

declare var IPlatformBehaviorInstance: undefined | { new(): IPlatformBehaviorInstance };

interface ISineBehaviorInstance extends IBehaviorInstance {
    movement: 'horizontal' | 'vertical' | 'forwards-backwards' | 'size' | 'width' | 'height' | 'angle' | 'opacity' | 'z-elevation' | 'value-only';
    wave: 'sine' | 'triangle' | 'sawtooth' | 'reverse-sawtooth' | 'square';
    period: number;
    magnitude: number;
    phase: number;
    readonly value: number;
    updateInitialState(): void;
    isEnabled: boolean;
}

declare var ISineBehaviorInstance: undefined | { new(): ISineBehaviorInstance };

interface ITileMovementBehaviourInstance extends IBehaviorInstance {
    isIgnoringInput: boolean;
    isDefaultControls: boolean;
    simulateControl(control: 'left' | 'right' | 'up' | 'down'): void;
    isEnabled: boolean;
    setSpeed(x: number, y: number): void;
    setGridPosition(x: number, y: number, immediate: boolean): void;
    getGridPosition(): [number, number];
    modifyGridDimensions(width: number, height: number, xOffset: number, yOffset: number): void;
    isMoving(): boolean;
    isMovingDirection(direction: 'left' | 'right' | 'up' | 'down'): boolean;
    canMoveTo(x: number, y: number): boolean;
    canMoveDirection(direction: 'left' | 'right' | 'up' | 'down', distance: number): boolean;
    getTargetPosition(): [number, number];
    getGridTargetPosition(): [number, number];
    toGridSpace(x: number, y: number): [number, number];
    fromGridSpace(x: number, y: number): [number, number];
}

declare var ITileMovementBehaviourInstance: undefined | { new(): ITileMovementBehaviourInstance };
