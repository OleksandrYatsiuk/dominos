import {
    distinctUntilChanged, map, Observable, OperatorFunction, shareReplay, startWith,
} from 'rxjs';
import {
    ActionContext, ActionStatus, ActionType, getActionTypeFromInstance,
} from '@ngxs/store';

export function ofActionInProcess<T extends ActionType>(type: T, compareArgumentsFn?: (type: ActionContext['action']) => boolean)
    : OperatorFunction<ActionContext, boolean> {
    return (source: Observable<ActionContext>) => source
        .pipe(
            map((ctx) => {
                const currentActionType = getActionTypeFromInstance(ctx.action);

                const allowedType = getActionTypeFromInstance(type);

                if (allowedType === currentActionType) {
                    const isSameArguments = compareArgumentsFn ? compareArgumentsFn(ctx.action) : true;
                    const startedActionStatus = [ActionStatus.Dispatched];
                    return startedActionStatus.includes(ctx.status) && isSameArguments;
                }
                return false;
            }),
            startWith(false),
            distinctUntilChanged(),
            shareReplay(1),
        );
}
