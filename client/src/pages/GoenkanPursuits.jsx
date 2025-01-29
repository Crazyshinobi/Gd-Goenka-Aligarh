import React, { useEffect, useRef } from "react"
import { Layout } from "../components/Layout"
import NavigationPages from "./NavigationPages"
import { motion } from "framer-motion"
import GoenkanBanner from "../assets/bg2.jpg"
import GoenkanPursuitsPdf from "../assets/Goenkan Pursuits-2025-26-(NUR - II).pdf"

function GoenkanPursuits() {
  const iframeRef = useRef(null)

  useEffect(() => {
    const preventContextMenu = (e) => {
      e.preventDefault()
      return false
    }

    const preventKeyboardShortcuts = (e) => {
      if (
        (e.ctrlKey && (e.key === "s" || e.key === "p" || e.key === "c")) || // Prevent Ctrl+S, Ctrl+P, Ctrl+C
        (e.altKey && e.key === "PrintScreen") // Prevent Alt+PrintScreen
      ) {
        e.preventDefault()
        return false
      }
    }

    const preventCopyPaste = (e) => {
      e.preventDefault()
      return false
    }

    if (iframeRef.current) {
      const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document

      iframeDocument.addEventListener("contextmenu", preventContextMenu)
      iframeDocument.addEventListener("keydown", preventKeyboardShortcuts)
      iframeDocument.addEventListener("copy", preventCopyPaste)
      iframeDocument.addEventListener("cut", preventCopyPaste)
      iframeDocument.addEventListener("paste", preventCopyPaste)

      // Disable text selection
      iframeDocument.body.style.userSelect = "none"
      iframeDocument.body.style.webkitUserSelect = "none"
      iframeDocument.body.style.msUserSelect = "none"
      iframeDocument.body.style.mozUserSelect = "none"
    }

    return () => {
      if (iframeRef.current) {
        const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document

        iframeDocument.removeEventListener("contextmenu", preventContextMenu)
        iframeDocument.removeEventListener("keydown", preventKeyboardShortcuts)
        iframeDocument.removeEventListener("copy", preventCopyPaste)
        iframeDocument.removeEventListener("cut", preventCopyPaste)
        iframeDocument.removeEventListener("paste", preventCopyPaste)
      }
    }
  }, [])

  return (
    <Layout>
      <div className="relative bgImage">
        <motion.img
          src={GoenkanBanner}
          alt="Goenkan Pursuits Banner"
          className="h-[35vh] md:h-[40vh] lg:h-[60vh] w-full object-fill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="absolute bottom-4 shadow-md md:bottom-6 left-4 md:left-8 text-2xl md:text-5xl font-bold text-red-600 bg-white bg-opacity-80 px-4 py-2 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          GOENKAN PURSUITS
        </motion.h1>
      </div>

      <NavigationPages />

      <section className="container max-w-7xl py-12 w-full md:w-[40%] mx-auto gap-4 flex flex-col lg:flex-row">
        {/* PDF Viewer Section */}
        <div className="lg:w-full">
          <h2 className="text-2xl underline text-center mb-6 font-bold">Goenkan Pursuits PDF</h2>
          <div className="relative w-full h-[80vh]">
            <iframe
              ref={iframeRef}
              src={`${GoenkanPursuitsPdf}#toolbar=0&navpanes=0&view=FitH`}
              title="Goenkan Pursuits PDF"
              className="w-full h-full"
              frameBorder="0"
              style={{
                pointerEvents: "auto",
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
              }}
            ></iframe>
            <div className="absolute inset-0 pointer-events-none" onContextMenu={(e) => e.preventDefault()}></div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default GoenkanPursuits

