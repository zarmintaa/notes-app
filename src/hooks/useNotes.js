import { useState } from "react";
import { useCallback, useContext, useEffect } from "react";
import {
  getActiveNotes,
  getArchivedNotes,
  getSearchedNotes,
} from "../utils/api";
import LocaleContext from "../context/LocaleContext";
import { useSearchParams } from "react-router-dom";

export const useNotes = (type = "unarchived") => {
  const [notes, setNotes] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const { onLogout } = useContext(LocaleContext);
  const params = useSearchParams();

  const showNotes = useCallback(async () => {
    const activeNotes = await getActiveNotes();
    const archivedNotes = await getArchivedNotes();

    if (activeNotes.error || archivedNotes.error) {
      onLogout();
    }

    if (type === "archived") {
      setNotes(archivedNotes.data);
      setIsLoading(false);
      return;
    }

    setNotes(activeNotes.data);
    setIsLoading(false);
  }, [onLogout, type]);

  const searchNotes = useCallback(
    async (e) => {
      params[1]({ keyword: e.target.value });
      const { error, data } = await getSearchedNotes(e.target.value, type);
      if (error) {
        onLogout();
      }
      setNotes(data);
    },
    [onLogout, params, type]
  );

  useEffect(() => {
    showNotes();
  }, [showNotes]);

  return [notes, loading, searchNotes];
};
