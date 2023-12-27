import { useState } from "react";

const [isLoading, setIsLoading] = useState(false);

function ModalEdit() {
  return (
    <>
      <Modal show={true} size="md" popup>
        <Modal.Header />
        <Modal.Body>
          <form>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Tambah data ikan
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nama" value="Nama ikan" />
                </div>
                <TextInput
                  id="nama"
                  placeholder="Masukkan nama ikan"
                  // name="nama"
                  // value={formik.values.nama}
                  // onChange={formik.handleChange}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="harga" value="Harga ikan" />
                </div>
                <TextInput
                  id="harga"
                  placeholder="Masukkan harga ikan"
                  name="harga"
                  type="number"
                  // value={formik.values.harga}
                  // onChange={formik.handleChange}
                />
              </div>
              <div>
                <div className="mb-3 block">
                  <Label htmlFor="jumlah" value="Jumlah ikan" />
                </div>
                <TextInput
                  id="jumlah"
                  placeholder="Masukkan jumlah ikan"
                  // value={formik.values.jumlah}
                  type="number"
                  // onChange={formik.handleChange}
                />
              </div>
              <div>
                <div>
                  <Label
                    htmlFor="file-upload-helper-text"
                    value="Upload file"
                    className="mb-3 block"
                  />
                </div>
                <FileInput
                  id="file-upload-helper-text"
                  helperText="JPEG, JPG or PNG."
                  name="image"
                  // onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <div className="w-full">
                {isLoading ? (
                  <Button
                    className="bg-[#0D81D5] rounded-xl"
                    disabled
                    type="submit"
                  >
                    Uploading...
                  </Button>
                ) : (
                  <Button className="bg-[#0D81D5] rounded-xl" type="submit">
                    Upload
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalEdit;
