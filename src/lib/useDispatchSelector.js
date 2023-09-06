import { useSyncExternalStore } from "react";
import { useDispatch } from "react-redux";

function useDispatchSelector(payload) {
  const dispatch = useDispatch();
//   return useSyncExternalStore(..., () =>
//     dispatch(payload)
//   );
}