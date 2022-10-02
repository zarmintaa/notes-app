import { useState } from "react";
import { useCallback, useEffect } from "react";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/api";
import Alert from "../utils/Alert";
import { useNavigate } from "react-router-dom";

export const useDetailNote = (id) => {
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getInitialDetail = useCallback(async () => {
    const { error, data } = await getNote(id);
    if (error) {
      navigate("/404");
    }
    setNote(data);
    setLoading(false);
  }, [id, navigate]);

  const navigateToHome = () => {
    navigate("/");
  };

  const achievedNotes = (id) => {
    Alert.optionAlert(
      "Apakah yakin ?",
      `Jika anda ingin ${
        note.archived ? "menghapus dari arsip" : "mengarsipkan"
      } data ini, maka data tidak dapat dikembalikan`,
      async () => {
        if (note.archived) {
          const { error } = await unarchiveNote(id);
          if (!error) {
            Alert.alertSuccess(
              "Success",
              `Data berhasil ${
                note.archived ? "dihapus dari arsip" : "diarsipkan"
              }!`,
              () => {
                navigateToHome();
              }
            );
          }
        } else {
          const { error } = await archiveNote(id);
          if (!error)
            Alert.alertSuccess(
              "Success",
              `Data berhasil ${
                note.archived ? "dihapus dari arsip" : "diarsipkan"
              }!`,
              () => {
                navigateToHome();
              }
            );
        }
      },
      () => {
        Alert.alertSuccess("Success!", "Data tidak diubah", () => {
          navigate(`/note/${id}`);
        });
      }
    );
  };

  const deleteItem = async (id) => {
    Alert.optionAlert(
      "Apakah yakin ?",
      "Jika anda menghapus data ini, maka data tidak dapat dikembalikan",
      async () => {
        const { error } = await deleteNote(id);
        if (!error)
          Alert.alertSuccess("Success", "Data berhasil terhapus!", () => {
            navigateToHome();
          });
      },
      () => {
        Alert.alertSuccess("Success", "Data tidak dihapus!", () => {
          navigate(`/note/${id}`);
        });
      }
    );
  };

  useEffect(() => {
    getInitialDetail();
  }, [getInitialDetail]);

  return [note, loading, achievedNotes, deleteItem];
};
