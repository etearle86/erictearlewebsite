export interface AppProps {
    projectSource: string;
}
export interface ComponentObj {
    id: number;
    project_source: string;
    component_name: string;
    component_category: string;
    url: string;
}
export interface FabWidgetProps {
    componentsArr: ComponentObj[];
}
export interface FabListProps extends FabWidgetProps {
    isOpen: boolean;
}
export interface FabListItemProps {
    url: ComponentObj["url"];
    componentName: ComponentObj["component_name"];
    componentCategory: ComponentObj["component_category"];
}
